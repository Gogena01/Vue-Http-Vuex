import requester from './index';

export default {
    getAllPosts() {
        return requester.get().then(res => {
            return Promise.resolve(res)
        })
    }
}