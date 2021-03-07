import { ScriptTagApi } from '../api/repository/scriptTagApi'

export class ScriptTagService {
  ctx: any
  scriptTagApi: ScriptTagApi
  constructor(ctx) {
    this.ctx = ctx
    const { shop, accessToken } = this.ctx.session
    this.scriptTagApi = new ScriptTagApi(shop, accessToken)
  }

  async installScriptTag(scriptName: string) {
    const result = await this.getScripts(scriptName)
    if (!result.script_tags.length) {
      await this.setScript(scriptName)
    }
  }

  async getScripts(scriptName: string) {
    const query = {
      src: `https://${this.ctx.request.host}/${scriptName}.js`
    }
    const { data } = await this.scriptTagApi.getScripts(query)
    console.log('getScripts', data)
    return data
  }

  async setScript(scriptName: string) {
    const request = {
      script_tag: {
        event: 'onload',
        src: `https://${this.ctx.request.host}/${scriptName}.js`
      }
    }
    const { data } = await this.scriptTagApi.setScript(request)
    console.log('setScript', data)
    return data
  }
}
