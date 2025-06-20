<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="auto"
                >
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='guwen'">
                    <el-form-item class="select" v-if="type!='info'"  label="顾问" prop="guwenId">
                        <el-select v-model="ruleForm.guwenId" :disabled="ro.guwenId" filterable placeholder="请选择顾问" @change="guwenChange">
                            <el-option
                                    v-for="(item,index) in guwenOptions"
                                    v-bind:key="item.id"
                                    :label="item.guwenName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='guwen' ">
                    <el-form-item class="input" v-if="type!='info'"  label="顾问姓名" prop="guwenName">
                        <el-input v-model="guwenForm.guwenName"
                                  placeholder="顾问姓名" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="顾问姓名" prop="guwenName">
                            <el-input v-model="ruleForm.guwenName"
                                      placeholder="顾问姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='guwen' ">
                    <el-form-item class="input" v-if="type!='info'"  label="顾问手机号" prop="guwenPhone">
                        <el-input v-model="guwenForm.guwenPhone"
                                  placeholder="顾问手机号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="顾问手机号" prop="guwenPhone">
                            <el-input v-model="ruleForm.guwenPhone"
                                      placeholder="顾问手机号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='guwen' ">
                    <el-form-item class="input" v-if="type!='info'"  label="顾问身份证号" prop="guwenIdNumber">
                        <el-input v-model="guwenForm.guwenIdNumber"
                                  placeholder="顾问身份证号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="顾问身份证号" prop="guwenIdNumber">
                            <el-input v-model="ruleForm.guwenIdNumber"
                                      placeholder="顾问身份证号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='guwen' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.guwenPhoto" label="顾问头像" prop="guwenPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (guwenForm.guwenPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.guwenPhoto" label="顾问头像" prop="guwenPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.guwenPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='guwen' ">
                    <el-form-item class="input" v-if="type!='info'"  label="擅长" prop="guwenShanchang">
                        <el-input v-model="guwenForm.guwenShanchang"
                                  placeholder="擅长" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="擅长" prop="guwenShanchang">
                            <el-input v-model="ruleForm.guwenShanchang"
                                      placeholder="擅长" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='guwen' ">
                    <el-form-item class="input" v-if="type!='info'"  label="顾问邮箱" prop="guwenEmail">
                        <el-input v-model="guwenForm.guwenEmail"
                                  placeholder="顾问邮箱" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="顾问邮箱" prop="guwenEmail">
                            <el-input v-model="ruleForm.guwenEmail"
                                      placeholder="顾问邮箱" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
            <input id="guwenId" name="guwenId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="健康知识名称" prop="jiankangzhishiName">
                       <el-input v-model="ruleForm.jiankangzhishiName"
                                 placeholder="健康知识名称" clearable  :readonly="ro.jiankangzhishiName"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="健康知识名称" prop="jiankangzhishiName">
                           <el-input v-model="ruleForm.jiankangzhishiName"
                                     placeholder="健康知识名称" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="健康知识编号" prop="jiankangzhishiUuidNumber">
                       <el-input v-model="ruleForm.jiankangzhishiUuidNumber"
                                 placeholder="健康知识编号" clearable  :readonly="ro.jiankangzhishiUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="健康知识编号" prop="jiankangzhishiUuidNumber">
                           <el-input v-model="ruleForm.jiankangzhishiUuidNumber"
                                     placeholder="健康知识编号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.jiankangzhishiPhoto" label="健康知识照片" prop="jiankangzhishiPhoto">
                        <file-upload
                            tip="点击上传健康知识照片"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.jiankangzhishiPhoto?$base.url+ruleForm.jiankangzhishiPhoto:''"
                            @change="jiankangzhishiPhotoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.jiankangzhishiPhoto" label="健康知识照片" prop="jiankangzhishiPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.jiankangzhishiPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.jiankangzhishiFile" label="附件" prop="jiankangzhishiFile">
                        <file-upload
                                tip="点击上传附件"
                                action="file/upload"
                                :limit="3"
                                :multiple="true"
                                :fileUrls="ruleForm.jiankangzhishiFile?$base.url+ruleForm.jiankangzhishiFile:''"
                                @change="jiankangzhishiFileUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.jiankangzhishiFile" label="附件" prop="jiankangzhishiFile">
                            <a type="text" style="text-decoration:none" class="el-button" :href="$base.url+ruleForm.jiankangzhishiFile"  >附件下载</a>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.jiankangzhishiVideo" label="视频" prop="jiankangzhishiVideo">
                        <file-upload
                            tip="点击上传视频"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.jiankangzhishiVideo?$base.url+ruleForm.jiankangzhishiVideo:''"
                            @change="jiankangzhishiVideoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.jiankangzhishiVideo" label="视频" prop="jiankangzhishiVideo">
                            <video :src="$base.url+ruleForm.jiankangzhishiVideo" width="100" height="100" controls="controls">
                            </video>
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info' && sessionTable=='users'"  label="赞" prop="zanNumber">
                       <el-input v-model="ruleForm.zanNumber"
                                 placeholder="赞" clearable  :readonly="ro.zanNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="赞" prop="zanNumber">
                           <el-input v-model="ruleForm.zanNumber"
                                     placeholder="赞" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info' && sessionTable=='users'"  label="踩" prop="caiNumber">
                       <el-input v-model="ruleForm.caiNumber"
                                 placeholder="踩" clearable  :readonly="ro.caiNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="踩" prop="caiNumber">
                           <el-input v-model="ruleForm.caiNumber"
                                     placeholder="踩" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="健康知识类型" prop="jiankangzhishiTypes">
                        <el-select v-model="ruleForm.jiankangzhishiTypes" :disabled="ro.jiankangzhishiTypes" placeholder="请选择健康知识类型">
                            <el-option
                                v-for="(item,index) in jiankangzhishiTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="健康知识类型" prop="jiankangzhishiValue">
                        <el-input v-model="ruleForm.jiankangzhishiValue"
                            placeholder="健康知识类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info' && !ro.jiankangzhishiContent"  label="健康知识内容" prop="jiankangzhishiContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.jiankangzhishiContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.jiankangzhishiContent" label="健康知识内容" prop="jiankangzhishiContent">
                            <span v-html="ruleForm.jiankangzhishiContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    import utilsJs, {getYearFormat,getMonthFormat,getDateFormat,getDatetimeFormat} from "../../../utils/utils.js";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                guwenForm: {},
                ro:{
                    guwenId: false,
                    jiankangzhishiName: false,
                    jiankangzhishiUuidNumber: false,
                    jiankangzhishiPhoto: false,
                    jiankangzhishiFile: false,
                    jiankangzhishiVideo: false,
                    zanNumber: false,
                    caiNumber: false,
                    jiankangzhishiTypes: false,
                    jiankangzhishiClicknum: false,
                    jiankangzhishiContent: false,
                    shangxiaTypes: false,
                    jiankangzhishiDelete: false,
                    insertTime: false,
                },
                ruleForm: {
                    guwenId: '',
                    jiankangzhishiName: '',
                    jiankangzhishiUuidNumber: new Date().getTime(),
                    jiankangzhishiPhoto: '',
                    jiankangzhishiFile: '',
                    jiankangzhishiVideo: '',
                    zanNumber: '',
                    caiNumber: '',
                    jiankangzhishiTypes: '',
                    jiankangzhishiClicknum: '',
                    jiankangzhishiContent: '',
                    shangxiaTypes: '',
                    jiankangzhishiDelete: '',
                    insertTime: '',
                },
                jiankangzhishiTypesOptions : [],
                shangxiaTypesOptions : [],
                guwenOptions : [],
                rules: {
                   guwenId: [
                              { required: true, message: '顾问不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   jiankangzhishiName: [
                              { required: true, message: '健康知识名称不能为空', trigger: 'blur' },
                          ],
                   jiankangzhishiUuidNumber: [
                              { required: true, message: '健康知识编号不能为空', trigger: 'blur' },
                          ],
                   jiankangzhishiPhoto: [
                              { required: true, message: '健康知识照片不能为空', trigger: 'blur' },
                          ],
                   jiankangzhishiFile: [
                              { required: true, message: '附件不能为空', trigger: 'blur' },
                          ],
                   jiankangzhishiVideo: [
                              { required: true, message: '视频不能为空', trigger: 'blur' },
                          ],
                   zanNumber: [
                              { required: true, message: '赞不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   caiNumber: [
                              { required: true, message: '踩不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   jiankangzhishiTypes: [
                              { required: true, message: '健康知识类型不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   jiankangzhishiClicknum: [
                              { required: true, message: '健康知识热度不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   jiankangzhishiContent: [
                              { required: true, message: '健康知识内容不能为空', trigger: 'blur' },
                          ],
                   shangxiaTypes: [
                              { required: true, message: '是否上架不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   jiankangzhishiDelete: [
                              { required: true, message: '逻辑删除不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   insertTime: [
                              { required: true, message: '录入时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");


            if (this.role != "管理员"){
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=jiankangzhishi_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.jiankangzhishiTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=shangxia_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.shangxiaTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `guwen/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.guwenOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            guwenChange(id){
                this.$http({
                    url: `guwen/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.guwenForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `jiankangzhishi/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.guwenChange(data.data.guwenId)
                        _this.ruleForm.jiankangzhishiContent = _this.ruleForm.jiankangzhishiContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.ruleForm.jiankangzhishiContent = this.ruleForm.jiankangzhishiContent.replaceAll(this.$base.url,"");
                        this.$http({
                            url:`jiankangzhishi/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.jiankangzhishiCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.jiankangzhishiCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            jiankangzhishiPhotoUploadChange(fileUrls){
                this.ruleForm.jiankangzhishiPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },
            jiankangzhishiFileUploadChange(fileUrls){
                this.ruleForm.jiankangzhishiFile = fileUrls;
                this.addEditUploadStyleChange()
            },
            jiankangzhishiVideoUploadChange(fileUrls){
                this.ruleForm.jiankangzhishiVideo = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
    height: 500px;

& /deep/ .ql-container {
      height: 310px;
  }
}
.amap-wrapper {
    width: 100%;
    height: 500px;
}
.search-box {
    position: absolute;
}
.addEdit-block {
    margin: -10px;
}
.detail-form-content {
    padding: 12px;
    background-color: transparent;
}
.btn .el-button {
    padding: 0;
}</style>

