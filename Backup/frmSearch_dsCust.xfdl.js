(function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("frmSearch_dsCust");this.set_titletext("Search_dsCust");if(Form==this.constructor){this._setFormPosition(1024,720);}_a=new DataObject("do_dsCust",this);_a._setContents({"items":[{"created_at":"","created_by":"","d_id":"","i_id":"","p_id":"","title":"","unread":0,"code":"","name":"","zip":"","addr":""}],"totalItems":0});this.addChild(_a.name,_a);_a=new Dataset("dsCust",this);_a.set_binddataobject("do_dsCust");_a.set_dataobjectpath("$.items[*]");_a._setContents("<ColumnInfo><Column id=\"code\" datapath=\"@.code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" datapath=\"@.name\" type=\"STRING\" size=\"256\"/><Column id=\"zip\" datapath=\"@.zip\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" datapath=\"@.addr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new Grid("grid_dsCust","15","200",null,"500","15",null,null,null,null,null,this);_a.set_taborder("1");_a.set_autofittype("col");_a.set_binddataset("dsCust");_a.set_cssclass("style_type01");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"コード\"/><Cell col=\"1\" text=\"氏名\"/><Cell col=\"2\" text=\"郵便番号\"/><Cell col=\"3\" text=\"住所\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:code\"/><Cell col=\"1\" text=\"bind:name\"/><Cell col=\"2\" text=\"bind:zip\"/><Cell col=\"3\" text=\"bind:addr\"/></Band></Format></Formats>");this.addChild(_a.name,_a);_a=new Button("btnSearch","15","135","120","50",null,null,null,null,null,null,this);_a.set_taborder("0");_a.set_text("検索");_a.set_cssclass("button_type01");this.addChild(_a.name,_a);_a=new Layout("default","",1024,720,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("frmSearch_dsCust.xfdl",function(){this.btnSearch_onclick=function(_a,_b){var _c={"Content-Type":"application/json","Authorization":"Bearer "+nexacro.getApplication().token};var _d={"page":1,"per_page":0,"use_display_id":true,"return_number_value":true};var _e={"httpheader":_c,"postdata":JSON.stringify(_d),"async":true};this.do_dsCust.request("req","POST","https://api.hexabase.com/api/v0/applications/APP-g3JVrSE5/datastores/dsCust/items/search",_e);};this.do_dsCust_onlaod=function(_a,_b){if(_b.reason==DataObject.REASON_LOADCONTENT){_a.data.items=null;}};});this.on_initEvent=function(){this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);this.do_dsCust.addEventHandler("onload",this.do_dsCust_onlaod,this);};this.loadIncludeScript("frmSearch_dsCust.xfdl");this.loadPreloadList();_a=null;};})();