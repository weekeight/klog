define("klog/admin/common/pop-confirm",["_","$","events"],function(a){var b=a("_"),c=a("$"),d=a("events"),e='<div class="pop-confirm"><div class="pop-confirm-inner clearfix"><div class="pop-confirm-content"></div><div class="pull-right"><a class="btn btn-small btn-primary submit">确定</a>&nbsp;<a class="btn btn-small cancel">取消</a></div></div></div>',f=function(){b.bindAll(this),this.$el=c(e).appendTo("body"),this.$el.find(".cancel, .submit").click(this.hide),this.$el.find(".submit").click(this.triggerSubmit),d.mixTo(this)};return f.prototype={constructor:f,show:function(a){if(!this.$el.is(":animated")){this.$el.find(".pop-confirm-content").text(a.text),this.$trigger=c(a.trigger);var b=this.$el.height(),d=this.$trigger.position();this.$trigger.outerHeight(),this.$el.css({left:d.left-.4*this.$el.width()+"px",top:d.top+"px",visibility:"visible",height:0}),this.$el.animate({height:b,top:"-="+b+"px"},"fast")}},hide:function(){var a=this.$el.height();this.$el.animate({height:0,top:"+="+a+"px"},"fast",function(){c(this).css({visibility:"hidden",height:"auto"})}),this.isShown=!1},triggerSubmit:function(){this.trigger("submit",this.$trigger)}},f}),define("klog/admin/index",["./common/pop-confirm","_","$","events","jquery-ujs"],function(a){a("_");var c=a("$"),d=a("./common/pop-confirm");a("jquery-ujs"),setTimeout(function(){c("div.alert-success").fadeOut()},3e3);var e=new d;c("a[data-pop-confirm]").click(function(){var a=c(this);return e.show({text:a.data("popConfirm"),trigger:this}),e.off().on("submit",function(){a.trigger("click.rails")}),!1}),c("a.delete").on("ajax:success",function(){c(this).closest("tr").hide("normal")})});