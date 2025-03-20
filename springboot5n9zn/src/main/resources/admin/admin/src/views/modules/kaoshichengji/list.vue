<template>
	<div class="main-content" :style='{"padding":" 30px 20px","flexWrap":"wrap","background":"none","display":"flex"}'>
		<!-- 列表页 -->
		<template v-if="showFlag">
			<el-form class="center-form-pv" :style='{"padding":"0px","margin":"0 20px 0 0","background":"none","display":"flex","width":"100px","justifyContent":"space-between","order":"1"}' :inline="true" :model="searchForm">
				<el-row :style='{"padding":"0","borderColor":"#fde2db #fbccc0 #f58c71","margin":"0","textAlign":"center","display":"flex","justifyContent":"center","top":"100px","flexWrap":"wrap","left":"20px","background":"none","borderWidth":"0px","width":"calc(100% - 20px)","position":"absolute","borderStyle":"solid"}' >
					<div :style='{"width":"auto","margin":"0 10px 0 0","background":"none","display":"inline-block"}'>
						<label :style='{"padding":"0 4px 0 0","color":"#666","textAlign":"right","display":"inline-block","lineHeight":"40px","fontSize":"14px","fontWeight":"500","height":"40px"}' class="item-label">准考证编号</label>
						<el-input v-model="searchForm.zhunkaozhengbianhao" placeholder="准考证编号" clearable></el-input>
					</div>
					<div :style='{"width":"auto","margin":"0 10px 0 0","background":"none","display":"inline-block"}'>
						<label :style='{"padding":"0 4px 0 0","color":"#666","textAlign":"right","display":"inline-block","lineHeight":"40px","fontSize":"14px","fontWeight":"500","height":"40px"}' class="item-label">科目名称</label>
						<el-input v-model="searchForm.kemumingcheng" placeholder="科目名称" clearable></el-input>
					</div>
					<div :style='{"width":"auto","margin":"0 10px 0 0","background":"none","display":"inline-block"}'>
						<label :style='{"padding":"0 4px 0 0","color":"#666","textAlign":"right","display":"inline-block","lineHeight":"40px","fontSize":"14px","fontWeight":"500","height":"40px"}' class="item-label">考试地点</label>
						<el-input v-model="searchForm.kaoshididian" placeholder="考试地点" clearable></el-input>
					</div>
					<div :style='{"width":"auto","margin":"0 10px 0 0","background":"none","display":"inline-block"}'>
						<label :style='{"padding":"0 4px 0 0","color":"#666","textAlign":"right","display":"inline-block","lineHeight":"40px","fontSize":"14px","fontWeight":"500","height":"40px"}' class="item-label">学号</label>
						<el-input v-model="searchForm.xuehao" placeholder="学号" clearable></el-input>
					</div>
					<el-button :style='{"border":"1px solid #5c7da0","cursor":"pointer","padding":"0px","boxShadow":"inset 0px 0px 56px 0px #466c95","margin":"0px 0 0 0px","color":"#fff","minWidth":"80px","outline":"none","borderRadius":"4px","background":"#fff","width":"auto","fontSize":"14px","height":"40px"}' type="success" @click="search()">查询</el-button>
				</el-row>

				<el-row :style='{"padding":"0","margin":"110px 0 0","flexWrap":"wrap","background":"none","display":"block","width":"100px","justifyContent":"center"}'>
					<el-button :style='{"cursor":"pointer","padding":"0 0px","margin":"0 0px 16px 0","borderColor":"#812d58","color":"#333","minWidth":"100px","outline":"none","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,.1) 0%, rgba(201,238,222,.1) 58%, rgba(113,190,157,.3) 60%, rgba(93,174,139,.3) 100%)","borderWidth":"0px","width":"auto","fontSize":"14px","borderStyle":"solid","height":"40px"}' v-if="isAuth('kaoshichengji','新增')" type="success" @click="addOrUpdateHandler()">新增</el-button>
					<el-button :style='{"cursor":"pointer","padding":"0 0px","margin":"0 0px 16px 0","borderColor":"#f07062","color":"#333","minWidth":"100px","outline":"none","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,221,221,.1) 58%, rgba(255,150,150,.3) 60%, rgba(255,118,118,.3) 100%)","borderWidth":"0px","width":"auto","fontSize":"14px","borderStyle":"dashed","height":"40px"}' v-if="isAuth('kaoshichengji','删除')" :disabled="dataListSelections.length <= 0" type="danger" @click="deleteHandler()">删除</el-button>




				</el-row>
			</el-form>
			
			<!-- <div> -->
				<el-table class="tables"
					:stripe='true'
					:style='{"padding":"0","borderColor":"#b4e8d2","margin":"110px 0px 20px 0px","borderRadius":"0px","borderWidth":"1px 8px 1px 8px","background":"rgba(255,255,255,.6)","flex":"1","width":"100%","borderStyle":"solid","order":"3"}' 
					v-if="isAuth('kaoshichengji','查看')"
					:data="dataList"
					v-loading="dataListLoading"
				@selection-change="selectionChangeHandler">
					<el-table-column :resizable='true' type="selection" align="center" width="50"></el-table-column>
					<el-table-column :resizable='true' :sortable='true' label="序号" type="index" width="50" />
					<el-table-column :resizable='true' :sortable='true'  
						prop="zhunkaozhengbianhao"
					label="准考证编号">
						<template slot-scope="scope">
							{{scope.row.zhunkaozhengbianhao}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="kaoshibianhao"
					label="考试编号">
						<template slot-scope="scope">
							{{scope.row.kaoshibianhao}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="kemumingcheng"
					label="科目名称">
						<template slot-scope="scope">
							{{scope.row.kemumingcheng}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="kaoshididian"
					label="考试地点">
						<template slot-scope="scope">
							{{scope.row.kaoshididian}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="kaoshiriqi"
					label="考试日期">
						<template slot-scope="scope">
							{{scope.row.kaoshiriqi}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="xuehao"
					label="学号">
						<template slot-scope="scope">
							{{scope.row.xuehao}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="xueshengxingming"
					label="学生姓名">
						<template slot-scope="scope">
							{{scope.row.xueshengxingming}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="kaoshichengji"
					label="考试成绩">
						<template slot-scope="scope">
							{{scope.row.kaoshichengji}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true' prop="shijuan" label="试卷">
						<template slot-scope="scope">
							<el-button v-if="scope.row.shijuan" type="text" size="small" @click="download($base.url+scope.row.shijuan)">下载</el-button>
                            <span v-else >无</span>
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="jiaoshizhanghao"
					label="教师账号">
						<template slot-scope="scope">
							{{scope.row.jiaoshizhanghao}}
						</template>
					</el-table-column>
					<el-table-column width="300" label="操作">
						<template slot-scope="scope">
							<el-button :style='{"cursor":"pointer","padding":"0 0px","margin":"0 10px 10px","borderColor":"#5dae8b","color":"#268e61","outline":"none","borderRadius":"0px","background":"url()","borderWidth":"0 0 4px","width":"auto","fontSize":"14px","borderStyle":"double","textShadow":"0 0px 0 rgba(0,0,0,.25)","height":"32px"}' v-if=" isAuth('kaoshichengji','查看')" type="success" size="mini" @click="addOrUpdateHandler(scope.row.id,'info')">详情</el-button>
							<el-button :style='{"cursor":"pointer","padding":"0 0px","margin":"0 10px 10px","borderColor":"#1b89ef","color":"#1b89ef","outline":"none","borderRadius":"0px","background":"none","borderWidth":"0 0 4px","width":"auto","fontSize":"14px","borderStyle":"double","textShadow":"0 0px 0 rgba(0,0,0,.25)","height":"32px"}' v-if=" isAuth('kaoshichengji','修改')" type="primary" size="mini" @click="addOrUpdateHandler(scope.row.id)">修改</el-button>





							<el-button :style='{"cursor":"pointer","padding":"0 0px","margin":"0 10px 10px","borderColor":"#eb4a5f","color":"#eb4a5f","outline":"none","borderRadius":"0px","background":"none","borderWidth":"0 0 4px","width":"auto","fontSize":"14px","borderStyle":"double","textShadow":"0 0px 0 rgba(0,0,0,.25)","height":"32px"}' v-if="isAuth('kaoshichengji','删除') " type="danger" size="mini" @click="deleteHandler(scope.row.id)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-pagination
					@size-change="sizeChangeHandle"
					@current-change="currentChangeHandle"
					:current-page="pageIndex"
					background
					:page-sizes="[10, 20, 30, 50]"
					:page-size="pageSize"
					:layout="layouts.join()"
					:total="totalPage"
					prev-text="<"
					next-text=">"
					:hide-on-single-page="true"
					:style='{"padding":"0 40px","margin":"20px 0 0","whiteSpace":"nowrap","color":"#eee","textAlign":"center","width":"100%","fontWeight":"500","order":"5"}'
				></el-pagination>
			<!-- </div> -->
		</template>
		
		<!-- 添加/修改页面  将父组件的search方法传递给子组件-->
		<add-or-update v-if="addOrUpdateFlag" :parent="this" ref="addOrUpdate"></add-or-update>





	</div>
</template>

<script>
//$graphType1
//$buttonName1
//$subNameList1
import axios from 'axios'
import AddOrUpdate from "./add-or-update";
export default {
  data() {
    return {
      searchForm: {
        key: ""
      },
      form:{},
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      dataListSelections: [],
      showFlag: true,
      sfshVisiable: false,
      shForm: {},
      chartVisiable: false,
      chartVisiable1: false,
      chartVisiable2: false,
      chartVisiable3: false,
      chartVisiable4: false,
      chartVisiable5: false,
      addOrUpdateFlag:false,
      layouts: ["total","prev","pager","next","sizes","jumper"],

    };
  },
  created() {
    this.init();
    this.getDataList();
    this.contentStyleChange()
  },
  mounted() {
  },
  filters: {
    htmlfilter: function (val) {
      return val.replace(/<[^>]*>/g).replace(/undefined/g,'');
    }
  },
  components: {
    AddOrUpdate,
  },
  methods: {

    contentStyleChange() {
      this.contentPageStyleChange()
    },
    // 分页
    contentPageStyleChange(){
      let arr = []

      // if(this.contents.pageTotal) arr.push('total')
      // if(this.contents.pageSizes) arr.push('sizes')
      // if(this.contents.pagePrevNext){
      //   arr.push('prev')
      //   if(this.contents.pagePager) arr.push('pager')
      //   arr.push('next')
      // }
      // if(this.contents.pageJumper) arr.push('jumper')
      // this.layouts = arr.join()
      // this.contents.pageEachNum = 10
    },








    init () {
    },
    search() {
      this.pageIndex = 1;
      this.getDataList();
    },

    // 获取数据列表
    getDataList() {
      this.dataListLoading = true;
      let params = {
        page: this.pageIndex,
        limit: this.pageSize,
        sort: 'id',
        order: 'desc',
      }
           if(this.searchForm.zhunkaozhengbianhao!='' && this.searchForm.zhunkaozhengbianhao!=undefined){
            params['zhunkaozhengbianhao'] = '%' + this.searchForm.zhunkaozhengbianhao + '%'
          }
           if(this.searchForm.kemumingcheng!='' && this.searchForm.kemumingcheng!=undefined){
            params['kemumingcheng'] = '%' + this.searchForm.kemumingcheng + '%'
          }
           if(this.searchForm.kaoshididian!='' && this.searchForm.kaoshididian!=undefined){
            params['kaoshididian'] = '%' + this.searchForm.kaoshididian + '%'
          }
           if(this.searchForm.xuehao!='' && this.searchForm.xuehao!=undefined){
            params['xuehao'] = '%' + this.searchForm.xuehao + '%'
          }
      this.$http({
        url: "kaoshichengji/page",
        method: "get",
        params: params
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.dataList = data.data.list;
          this.totalPage = data.data.total;
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
        this.dataListLoading = false;
      });
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    // 多选
    selectionChangeHandler(val) {
      this.dataListSelections = val;
    },
    // 添加/修改
    addOrUpdateHandler(id,type) {
      this.showFlag = false;
      this.addOrUpdateFlag = true;
      this.crossAddOrUpdateFlag = false;
      if(type!='info'){
        type = 'else';
      }
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id,type);
      });
    },
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 删除
    deleteHandler(id) {
      var ids = id
        ? [Number(id)]
        : this.dataListSelections.map(item => {
            return Number(item.id);
          });
      this.$confirm(`确定进行[${id ? "删除" : "批量删除"}]操作?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http({
          url: "kaoshichengji/delete",
          method: "post",
          data: ids
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.$message({
              message: "操作成功",
              type: "success",
              duration: 1500,
              onClose: () => {
                this.search();
              }
            });
          } else {
            this.$message.error(data.msg);
          }
        });
      });
    },


  }

};
</script>
<style lang="scss" scoped>
	
	.center-form-pv {
	  .el-date-editor.el-input {
	    width: auto;
	  }
	}
	
	.el-input {
	  width: auto;
	}
	
	// form
	.center-form-pv .el-input /deep/ .el-input__inner {
				border-radius: 0px;
				padding: 0 8px;
				box-shadow: 0 0 0px rgba(64, 158, 255, .5);
				outline: none;
				color: #666;
				background: #fff;
				width: auto;
				font-size: 14px;
				border-color: #b4e8d2;
				border-width: 4px;
				border-style: double;
				height: 40px;
			}
	
	.center-form-pv .el-select /deep/ .el-input__inner {
				border-radius: 0px;
				padding: 0 8px;
				box-shadow: 0 0 0px rgba(64, 158, 255, .5);
				outline: none;
				color: #666;
				background: #fff;
				width: auto;
				font-size: 14px;
				border-color: #b4e8d2;
				border-width: 4px;
				border-style: double;
				height: 40px;
			}
	
	.center-form-pv .el-date-editor /deep/ .el-input__inner {
				border-radius: 0px;
				padding: 0 4px 0 24px;
				box-shadow: 0 0 0px rgba(64, 158, 255, .5);
				outline: none;
				color: #666;
				background: #fff;
				width: auto;
				font-size: 14px;
				border-color: #b4e8d2;
				border-width: 4px;
				border-style: double;
				height: 40px;
			}
	
	// table
	.el-table /deep/ .el-table__header-wrapper thead {
				color: #812d58;
				font-weight: 500;
				width: 100%;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr {
				background: #fff;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr th {
				padding: 6px 10px;
				color: #333;
				background: none;
				border-color: #b4e8d2;
				border-width: 0px 1px 0px 0px;
				border-style: solid;
				text-align: left;
			}

	.el-table /deep/ .el-table__header-wrapper thead tr th .cell {
				padding: 0 10px;
				word-wrap: normal;
				word-break: break-all;
				white-space: normal;
				font-weight: bold;
				display: inline-block;
				vertical-align: middle;
				width: 100%;
				line-height: 24px;
				position: relative;
				text-overflow: ellipsis;
			}

	
	.el-table /deep/ .el-table__body-wrapper tbody {
				border: 0;
				width: 100%;
			}

	.el-table /deep/ .el-table__body-wrapper tbody tr {
				border: 0;
				background: none;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 4px 10px;
				color: #666;
				background: none;
				border-color: #b4e8d2;
				border-width: 0 1px 0px 0;
				border-style: solid;
				text-align: left;
			}
	
		.el-table /deep/ .el-table__body-wrapper tbody tr.el-table__row--striped td {
		background: rgba(180,232,210,.2);
	}
		
	.el-table /deep/ .el-table__body-wrapper tbody tr:hover td {
				padding: 4px 10px;
				color: #666;
				background: rgba(180,232,210,.3);
				border-color: #b4e8d2;
				border-width: 0 1px 0px 0;
				border-style: solid;
				text-align: left;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 4px 10px;
				color: #666;
				background: none;
				border-color: #b4e8d2;
				border-width: 0 1px 0px 0;
				border-style: solid;
				text-align: left;
			}

	.el-table /deep/ .el-table__body-wrapper tbody tr td .cell {
				padding: 0 10px;
				overflow: hidden;
				word-break: break-all;
				white-space: normal;
				line-height: 24px;
				text-overflow: ellipsis;
			}
	
	// pagination
	.main-content .el-pagination /deep/ .el-pagination__total {
				margin: 0 10px 0 0;
				color: #333;
				font-weight: 400;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev {
				border: 1px solid #efefef;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #333;
				background: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next {
				border: 1px solid #efefef;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #333;
				background: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev:disabled {
				border: 1px solid #efefef;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #333;
				background: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next:disabled {
				border: 1px solid #efefef;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #333;
				background: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}

	.main-content .el-pagination /deep/ .el-pager {
				padding: 0;
				margin: 0;
				display: inline-block;
				vertical-align: top;
			}

	.main-content .el-pagination /deep/ .el-pager .number {
				cursor: pointer;
				border: 1px solid #efefef;
				padding: 0 4px;
				margin: 0 5px;
				color: #333;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #fff;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number:hover {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				border-color: #5dae8b;
				line-height: 28px;
				border-radius: 2px;
				background: #5dae8b;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number.active {
				cursor: default;
				padding: 0 4px;
				margin: 0 5px;
				color: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				border-color: #5dae8b;
				line-height: 28px;
				border-radius: 2px;
				background: #5dae8b;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes {
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input {
				margin: 0 5px;
				width: 100px;
				position: relative;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
				border: 1px solid #efefef;
				cursor: pointer;
				padding: 0 25px 0 8px;
				color: #333;
				display: inline-block;
				font-size: 13px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: #fff;
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
				top: 0;
				position: absolute;
				right: 0;
				height: 100%;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
				cursor: pointer;
				color: #333;
				width: 25px;
				font-size: 14px;
				line-height: 28px;
				text-align: center;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump {
				margin: 0 0 0 24px;
				color: #333;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input {
				border-radius: 3px;
				padding: 0 2px;
				margin: 0 2px;
				display: inline-block;
				width: 50px;
				font-size: 14px;
				line-height: 18px;
				position: relative;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
				border: 1px solid #efefef;
				cursor: pointer;
				padding: 0 3px;
				color: #333;
				display: inline-block;
				font-size: 14px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: #fff;
				width: 100%;
				text-align: center;
				height: 28px;
			}
</style>
