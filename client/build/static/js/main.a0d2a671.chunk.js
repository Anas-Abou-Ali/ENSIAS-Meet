(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),r=n(55),s=n.n(r),o=(n(63),n(19)),l=n(2),u=n(56),d=n.n(u),j=n(57),b=n.n(j),m=n(3),O=(n(104),function(e){return Object(c.jsx)("header",{className:"dropShadow",children:Object(c.jsx)("div",{className:"headerContainer",children:Object(c.jsxs)("div",{className:"headerLogo",children:[Object(c.jsx)("div",{className:"logoText",children:"ENSIAS-Meet"}),Object(c.jsxs)("div",{className:"onlineText",children:[" ",e.online," ",Object(c.jsx)(m.h,{className:"onlineIcon",alt:"users"})," online now"]})]})})})}),g=(n(105),n(106),function(e){var t;switch(e.message.type){case"you":t="yourMessage";break;case"partner":t="partnerMessage";break;default:t="systemMessage"}return Object(c.jsx)("div",{className:"messageContainer",children:Object(c.jsxs)("div",{className:"message "+t,children:[" ",e.message.text," "]})})}),f=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){t.current.scrollIntoView({behavior:"smooth"})})),Object(c.jsxs)("div",{className:"chatBox",children:[e.messages.map((function(e,t){return Object(c.jsx)(g,{message:e},t)})),Object(c.jsx)("div",{style:{float:"left",clear:"both"},ref:function(e){t.current=e}})]})},p=(n(107),function(e){return Object(c.jsx)("div",{className:"loading",children:e.status})});n(108);var h=function(){var e,t,n,i,r,s,u,j=Object(a.useState)(""),g=Object(l.a)(j,2),h=g[0],v=g[1],x=Object(a.useState)([]),k=Object(l.a)(x,2),w=k[0],N=k[1],y=Object(a.useState)(),C=Object(l.a)(y,2),S=C[0],T=C[1],M=Object(a.useState)(!1),V=Object(l.a)(M,2),I=V[0],A=V[1],B=Object(a.useState)(""),z=Object(l.a)(B,2),D=z[0],E=z[1],R=Object(a.useState)(!1),F=Object(l.a)(R,2),q=F[0],P=F[1],U=Object(a.useState)(!1),W=Object(l.a)(U,2),_=W[0],J=W[1],L=Object(a.useState)(!1),Q=Object(l.a)(L,2),$=Q[0],G=Q[1],H=Object(a.useState)(!1),K=Object(l.a)(H,2),X=K[0],Y=K[1],Z=Object(a.useState)(!1),ee=Object(l.a)(Z,2),te=ee[0],ne=ee[1],ce=Object(a.useState)(""),ae=Object(l.a)(ce,2),ie=ae[0],re=ae[1],se=Object(a.useState)([]),oe=Object(l.a)(se,2),le=oe[0],ue=oe[1],de=Object(a.useState)("Mock status!"),je=Object(l.a)(de,2),be=je[0],me=je[1],Oe=Object(a.useState)(!1),ge=Object(l.a)(Oe,2),fe=ge[0],pe=ge[1],he=Object(a.useState)(!1),ve=Object(l.a)(he,2),xe=ve[0],ke=ve[1],we=Object(a.useRef)(),Ne=Object(a.useRef)(),ye=Object(a.useRef)(),Ce=Object(a.useRef)();function Se(){var e=new AudioContext,t=e.createOscillator(),n=t.connect(e.createMediaStreamDestination());return t.start(),Object.assign(n.stream.getAudioTracks()[0],{enabled:!1})}function Te(){var e=Object.assign(document.createElement("canvas"),{width:580,height:400});e.getContext("2d").fillRect(0,0,580,400);var t=e.captureStream();return Object.assign(t.getVideoTracks()[0],{enabled:!1})}function Me(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){T(e),we.current&&(we.current.srcObject=e)}),(function(){A(!0),navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){var t=new MediaStream([Se()].concat(Object(o.a)(e.getVideoTracks())));T(t),we.current&&(we.current.srcObject=t)}),(function(){navigator.mediaDevices.getUserMedia({audio:!0}).then((function(e){var t=new MediaStream([Te()].concat(Object(o.a)(e.getAudioTracks())));T(t),we.current&&(we.current.srcObject=t)}),(function(){var e=new MediaStream([Se(),Te()]);T(e),we.current&&(we.current.srcObject=e)}))}))}))}function Ve(){ke(!1),J(!1),ue([]),P(!1),pe(!1),Me()}function Ie(){S&&(G(!$),S.getAudioTracks()[0]&&(S.getAudioTracks()[0].enabled=$))}function Ae(){S&&(Y(!X),S.getVideoTracks()[0].enabled=X)}Object(a.useEffect)((function(){Me(),ye.current=d.a.connect("/"),window.onbeforeunload=function(e){Ce.current&&(Ce.current.destroy(),ye.current.emit("disconnect"))},ye.current.on("yourID",(function(e){v(e)})),ye.current.on("allUsers",(function(e){N(e)})),ye.current.on("messageSent",(function(e){ue((function(t){return[].concat(Object(o.a)(t),[{type:"you",text:e.message}])}))})),ye.current.on("receiveMessage",(function(e){ue((function(t){return[].concat(Object(o.a)(t),[{type:"partner",text:e.message}])}))})),ye.current.on("peer",(function(e){pe(!0),me("Partner found!"),ye.current.off("signal"),E(e.peerId);var t,n=e.peerId;t=we.current&&we.current.srcObject?we.current.srcObject:null;var c=new b.a({initiator:e.initiator,trickle:!0,config:{iceServers:[{urls:"stun:as",username:"as",credential:"123456789"},{urls:"turn:as",username:"cas",credential:"123456789"}]},stream:t});Ce.current=c,c._debug=console.log,ye.current.on("signal",(function(e){e.peerId===n&&c.signal(e.signal)})),c.on("signal",(function(e){ye.current.emit("signal",{signal:e,peerId:n})})),c.on("error",(function(e){console.log("Error sending connection to peer %s:",n,e)})),c.on("connect",(function(){J(!0),P(!1),pe(!1),c.send("hey peer")})),c.on("data",(function(e){})),c.on("stream",(function(e){Ne.current.srcObject=e})),c.on("close",(function(){Ve()}))}))}),[]),S&&(e=Object(c.jsx)("video",{className:"video userVideo",playsInline:!0,muted:!0,ref:we,autoPlay:!0})),te?t=Object(c.jsx)("video",{className:"video partnerVideo",playsInline:!0,ref:Ne,autoPlay:!0}):te||(t=Object(c.jsx)("video",{className:"video partnerVideo",playsInline:!0,ref:Ne,autoPlay:!0})),_&&(n=$?Object(c.jsx)("span",{className:"iconContainer",onClick:function(){return Ie()},children:Object(c.jsx)(m.e,{className:"iconAlternative",alt:"Unmute audio"})}):Object(c.jsx)("span",{className:"iconContainer",onClick:function(){return Ie()},children:Object(c.jsx)(m.d,{className:"iconBasic",alt:"Mute audio"})}),i=X?Object(c.jsx)("span",{className:"iconContainer",onClick:function(){return Ae()},children:Object(c.jsx)(m.j,{className:"iconAlternative",alt:"Resume video"})}):Object(c.jsx)("span",{className:"iconContainer",onClick:function(){return Ae()},children:Object(c.jsx)(m.i,{className:"iconBasic",alt:"Stop audio"})}),s=Object(c.jsx)("span",{className:"iconContainer",onClick:function(){navigator.mediaDevices.getDisplayMedia({cursor:!0}).then((function(e){Ce.current.replaceTrack(S.getVideoTracks()[0],e.getVideoTracks()[0],S),we.current.srcObject=e,ke(!0),e.getTracks()[0].onended=function(){ke(!1),I?Ce.current.replaceTrack(e.getVideoTracks()[0],Te(),S):Ce.current.replaceTrack(e.getVideoTracks()[0],S.getVideoTracks()[0],S),we.current.srcObject=S}}),(function(e){console.log(e)}))},children:Object(c.jsx)(m.c,{className:"iconBasic",alt:"Share screen"})}),(function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t}()||xe)&&(s=Object(c.jsx)(c.Fragment,{})),u=Object(c.jsx)("span",{className:"iconContainer",onClick:function(){return Ce.current.destroy(),void Ve()},children:Object(c.jsx)(m.f,{className:"iconAlternative",alt:"End call"})}),r=te?Object(c.jsx)("span",{className:"iconContainer",onClick:function(){ne(!1)},children:Object(c.jsx)(m.a,{className:"iconAlternative",alt:"fullscreen"})}):Object(c.jsx)("span",{className:"iconContainer",onClick:function(){ne(!0)},children:Object(c.jsx)(m.b,{className:"iconBasic",alt:"fullscreen"})}));var Be=Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{online:w.length}),Object(c.jsx)("main",{children:Object(c.jsxs)("div",{className:"mainContainer",children:[fe&&Object(c.jsx)(p,{status:be}),Object(c.jsxs)("div",{children:[Object(c.jsx)(f,{messages:le}),Object(c.jsx)("div",{className:"inputContainer",children:Object(c.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),""!==ie&&ye.current.emit("sendMessage",{message:ie,peerId:D}),re("")}(e)},children:[Object(c.jsx)("input",{className:"chatInput",type:"text",value:ie,onChange:function(e){return re(e.target.value)},placeholder:"Write something..."}),Object(c.jsx)("i",{className:"attachmentButton","aria-hidden":"true",children:Object(c.jsx)(m.g,{})}),_&&Object(c.jsx)("button",{className:"chatButton",type:"submit",children:"Send"}),!_&&!q&&Object(c.jsx)("button",{onClick:function(){return P(!0),void ye.current.emit("findPartner",{from:h,onlyChat:I})},className:"chatButton next",children:"Next"}),!_&&q&&Object(c.jsx)("button",{onClick:function(){return P(!1),void ye.current.emit("leaveQueue")},className:"chatButton cancel",children:"Cancel"})]})})]})]})})]});return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("span",{className:"callContainer",children:[Object(c.jsx)("div",{className:"videoContainer partnerVideoContainer "+(te?"partnerVideoFull":""),children:t}),Object(c.jsx)("div",{className:"videoContainer userVideoContainer "+(te?"userVideoFull":""),children:e}),Object(c.jsxs)("div",{className:"controlsContainer flex "+(te?"controlsFull":""),children:[n,i,s,r,u]})]}),!te&&Object(c.jsx)("span",{children:Be})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,n){},94:function(e,t){},96:function(e,t){}},[[109,1,2]]]);
//# sourceMappingURL=main.a0d2a671.chunk.js.map