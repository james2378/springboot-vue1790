export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["新增","查看","修改","删除","审核","准考证"],"menu":"考试报名","menuJump":"列表","tableName":"kaoshibaoming"}],"menu":"考试报名管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除"],"menu":"考试信息","menuJump":"列表","tableName":"kaoshixinxi"}],"menu":"考试信息管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除","考试成绩"],"menu":"准考证","menuJump":"列表","tableName":"zhunkaozheng"}],"menu":"准考证管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["新增","查看","修改","删除"],"menu":"考试成绩","menuJump":"列表","tableName":"kaoshichengji"}],"menu":"考试成绩管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看","修改","删除"],"menu":"新闻资讯","tableName":"news"},{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-phone","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","考试报名"],"menu":"考试信息列表","menuJump":"列表","tableName":"kaoshixinxi"}],"menu":"考试信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","支付"],"menu":"考试报名","menuJump":"列表","tableName":"kaoshibaoming"}],"menu":"考试报名管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"准考证","menuJump":"列表","tableName":"zhunkaozheng"}],"menu":"准考证管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看"],"menu":"考试成绩","menuJump":"列表","tableName":"kaoshichengji"}],"menu":"考试成绩管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","考试报名"],"menu":"考试信息列表","menuJump":"列表","tableName":"kaoshixinxi"}],"menu":"考试信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","审核","准考证"],"menu":"考试报名","menuJump":"列表","tableName":"kaoshibaoming"}],"menu":"考试报名管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"考试信息","menuJump":"列表","tableName":"kaoshixinxi"}],"menu":"考试信息管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","考试成绩"],"menu":"准考证","menuJump":"列表","tableName":"zhunkaozheng"}],"menu":"准考证管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","修改","删除"],"menu":"考试成绩","menuJump":"列表","tableName":"kaoshichengji"}],"menu":"考试成绩管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","考试报名"],"menu":"考试信息列表","menuJump":"列表","tableName":"kaoshixinxi"}],"menu":"考试信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"教师","tableName":"jiaoshi"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
