class LightboxStore {
    constructor () {
        this.state = {
            images: [],
            index: false
        }
    }

    addImage (url) {
        return this.state.images.push(url)
    }

    open (index) {
        this.state.index = index
    }

    close () {
        this.state.index = false
    }
}

export default new LightboxStore()