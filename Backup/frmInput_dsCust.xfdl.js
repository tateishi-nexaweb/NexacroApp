(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("frmSearch_dsCust");this.set_titletext("Search_dsCust");if(Form==this.constructor){this._setFormPosition(1024,720);}_a=new DataObject("do_dsCust",this);_a._setContents({"item":{"code":"","name":"","zip":"","addr":""}});this.addChild(_a.name,_a);_a=new DataObject("do_regResult",this);_a._setContents({"error":null,"history_id":"","item_id":"","item":{}});this.addChild(_a.name,_a);_a=new Dataset("dsCust",this);_a.set_binddataobject("do_dsCust");_a.set_dataobjectpath("$.item");_a.set_dataobjectbindmode("twoway");_a.set_updatecontrol("false");_a._setContents("<ColumnInfo><Column id=\"code\" datapath=\"@.code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" datapath=\"@.name\" type=\"STRING\" size=\"256\"/><Column id=\"zip\" datapath=\"@.zip\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" datapath=\"@.addr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Div("divDetail","15","110","990","530",null,null,null,null,null,null,this);_a.set_taborder("1");_a.set_cssclass("shadow");_a.set_text("");this.addChild(_a.name,_a);_a=new Static("stLabel_0","30","30","200","40",null,null,null,null,null,null,this.divDetail.form);_a.set_taborder("0");_a.set_text("コード");_a.set_cssclass("label_type01");this.divDetail.addChild(_a.name,_a);_a=new Edit("inputValue_0","180","30","700","40",null,null,null,null,null,null,this.divDetail.form);_a.set_taborder("1");_a.set_cssclass("style_type01");this.divDetail.addChild(_a.name,_a);_a=new Static("stLabel_1","30","30","200","40",null,null,null,null,null,null,this.divDetail.form);_a.set_taborder("0");_a.set_text("氏名");_a.set_cssclass("label_type01");this.divDetail.addChild(_a.name,_a);_a=new Edit("inputValue_1","180","30","700","40",null,null,null,null,null,null,this.divDetail.form);_a.set_taborder("1");_a.set_cssclass("style_type01");this.divDetail.addChild(_a.name,_a);_a=new Static("stLabel_2","30","30","200","40",null,null,null,null,null,null,this.divDetail.form);_a.set_taborder("0");_a.set_text("郵便場号");_a.set_cssclass("label_type01");this.divDetail.addChild(_a.name,_a);_a=new Edit("inputValue_2","180","30","700","40",null,null,null,null,null,null,this.divDetail.form);_a.set_taborder("1");_a.set_cssclass("style_type01");this.divDetail.addChild(_a.name,_a);_a=new Static("stLabel_3","30","30","200","40",null,null,null,null,null,null,this.divDetail.form);_a.set_taborder("0");_a.set_text("住所");_a.set_cssclass("label_type01");this.divDetail.addChild(_a.name,_a);_a=new Edit("inputValue_3","180","30","700","40",null,null,null,null,null,null,this.divDetail.form);_a.set_taborder("1");_a.set_cssclass("style_type01");this.divDetail.addChild(_a.name,_a);_a=new Button("btnReg","450","660","120","50",null,null,null,null,null,null,this);_a.set_taborder("2");_a.set_text("登録");_a.set_cssclass("button_type01");this.addChild(_a.name,_a);_a=new Layout("default","",0,0,this.divDetail.form,function(_b){});_a.set_type("horizontal");_a.set_flexwrap("wrap");_a.set_spacing("20px");_a.set_verticalgap("30");_a.set_flexmainaxisalign("center");this.divDetail.form.addLayout(_a.name,_a);_a=new Layout("default","",1024,720,this,function(_b){});this.addLayout(_a.name,_a);_a=new BindItem("item0","divDetail.form.inputValue_0","value","dsCust","code");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item1","divDetail.form.inputValue_1","value","dsCust","name");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item2","divDetail.form.inputValue_2","value","dsCust","zip");this.addChild(_a.name,_a);_a.bind();_a=new BindItem("item3","divDetail.form.inputValue_3","value","dsCust","addr");this.addChild(_a.name,_a);_a.bind();};this.loadPreloadList=function(){};this.registerScript("frmInput_dsCust.xfdl",function(){this.btnReg_onclick=function(_a,_b){var _c={"Content-Type":"application/json","Authorization":"Bearer "+nexacro.getApplication().token};var _d={"httpheader":_c,"postdata":JSON.stringify(this.do_dsCust.data),"async":true};this.do_regResult.request("req","POST","https://api.hexabase.com/api/v0/applications/APP-g3JVrSE5/datastores/dsCust/items/new",_d);};this.do_regResult_onload=function(_a,_b){if(_b.reason==DataObject.REASON_REQUEST){var _c=_a.data.error;if(_c==null){alert("Add Item Success");}else{alert("Add Item Error : "+_c);}}};});this.on_initEvent=function(){this.btnReg.addEventHandler("onclick",this.btnReg_onclick,this);this.do_dsCust.addEventHandler("onload",this.do_dsCust_onlaod,this);this.do_regResult.addEventHandler("onload",this.do_regResult_onload,this);this.dsCust.addEventHandler("onload",this.dsCust_onload,this);};this.loadIncludeScript("frmInput_dsCust.xfdl");this.loadPreloadList();_a=null;};})();