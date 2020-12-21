import Vue from 'vue'

declare module 'graphql-request'
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
