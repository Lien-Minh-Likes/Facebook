var time_delay = 500; var timer = null;
function stopauto(){clearTimeout(timer);}function remove_dialog(){try{document.getElementById("groupsMembershipAddedDialog").remove();}catch(err){timer = setTimeout(function(){remove_dialog();}, 1000);}}function autoinvite(num){try{var div_invite = document.getElementsByClassName("fbProfileBrowserListItem").item(num);div_invite.scrollIntoView();var name = div_invite.getElementsByClassName("uiProfileBlockContent").item(0).getElementsByTagName("a").item(0).innerHTML;var invite = div_invite.getElementsByTagName("div").item(0).getElementsByTagName("div").item(0).getElementsByTagName("a").item(0);invite.click(); remove_dialog();var gt = document.getElementsByClassName("auto-text").item(0).getElementsByTagName("div").item(0).getElementsByTagName("span").item(0).innerHTML;gt = parseInt(gt)+1;document.getElementsByClassName("auto-text").item(0).getElementsByTagName("div").item(0).getElementsByTagName("span").item(0).innerHTML = gt;document.getElementsByClassName("auto-text").item(0).getElementsByTagName("div").item(1).getElementsByTagName("em").item(0).innerHTML = name;}catch(err){timer = setTimeout(function(){autoinvite(num);}, 2000);}finally {num = num+1;timer = setTimeout(function(){autoinvite(num);}, time_delay);}}function close_win(){stopauto(); document.getElementsByClassName("demo-auto").item(0).remove();}function paingraph(){var newdiv = document.createElement("div");newdiv.setAttribute('class','demo-auto');newdiv.setAttribute('style','position:fixed; z-index:99999; height:100%; width:100%; top:0px;');newdiv.innerHTML = "<div style='position:absolute; height:100%; width:100%; background:#000000; opacity:0.5;'></div> <div style='position:absolute; height:100%; width:100%;'><div style='position:relative; height:70px; width:490px; margin:100px auto; background:#FFFFFF; border:5px solid #DF411B;'> <div style='float:left; height:50px; width:50px; padding:10px;'><a href='https://www.facebook.com/groups/1642004659369544/' target='_blank'><img title='LIÊN MINH LIKES' style='height:100%; width:100%;' src='http://www.chauphu.net/images/logo.png'/></a></div> <div class='auto-text' style='float:right; color:#000000; height:50px; width:400px; padding:10px;'></div> <div style='clear:both;'></div> <div style='position:absolute; height:32px; width:32px; top:7px; right:7px; cursor:pointer;'><img onclick='close_win();' title='Close' src='http://www.chauphu.net/images/close-win.png'/></div>  </div></div>";var dom = document.getElementsByTagName("body").item(0);dom.appendChild(newdiv);}function auto_invie_join_group(){paingraph();var dom = document.getElementsByClassName("auto-text").item(0);var tag_h3 = document.createElement("h3");tag_h3.innerHTML = "Invite Friends Join Group";dom.appendChild(tag_h3);var div_dong1 = document.createElement("div");div_dong1.innerHTML = "Invited: <span>0</span> friends";var div_dong2 = document.createElement("div");div_dong2.innerHTML = "<em>Who</em> join group";dom.appendChild(div_dong1);dom.appendChild(div_dong2);autoinvite(0);}auto_invie_join_group();
