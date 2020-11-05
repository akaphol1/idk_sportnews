import Axios from "axios"

export default {
    data() {
        return {

        }
    },
    methods: {
        callApi(method, url, dataObj) {
            try {
              return   Axios({
                    method: method,
                    url: url,
                    data: dataObj
                });
            } catch (e) {
                return e.response
            }

        }
    },
}
