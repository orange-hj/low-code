class Storage {
    constructor(storageLocation) {
        this.storageLocation = storageLocation
    }
    getData(key) {
        if (this.storageLocation.getItem(key)) {
            return JSON.parse(this.storageLocation.getItem(key));
        }
        return
    }
    setData(key, data) {
        data = JSON.stringify(data);
        this.storageLocation.setItem(key, data);
    }
    delData(key) {
        if (this.storageLocation.getItem(key)) {
            this.storageLocation.removeItem(key);
            return
        }
        return console.log('不存在这个数据');
    }
    clear() {
        this.storageLocation.clear();
    }
}
export const storage = new Storage(window.sessionStorage);