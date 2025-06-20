const base = {
    get() {
        return {
            url : "http://localhost:8080/cwjiankangzixun/",
            name: "cwjiankangzixun",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/cwjiankangzixun/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "宠物健康咨询系统"
        } 
    }
}
export default base
