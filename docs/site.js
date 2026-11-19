"use strict";
const byId = id => document.getElementById(id);
const isWindows=/Windows/i.test(navigator.userAgent);
function showFirstOpenGuide(){
  byId(isWindows ? "windows-guide" : "first-open-guide").open=true;
}
if(isWindows){
  byId("windows-guide").open=true;
  byId("first-open-guide").open=false;
  byId("download-windows").classList.replace("secondary","primary");
  byId("download").classList.replace("primary","secondary");
  for(const link of document.querySelectorAll('a[href="#first-open-guide"]'))link.href="#windows-guide";
}
for(const link of document.querySelectorAll('a[href="#windows-guide"]'))link.addEventListener("click",()=>{byId("windows-guide").open=true;});
if(location.hash==="#windows-guide")byId("windows-guide").open=true;
for(const link of document.querySelectorAll('a[href="#first-open-guide"]'))link.addEventListener("click",showFirstOpenGuide);
if(location.hash==="#first-open-guide")showFirstOpenGuide();
byId("download").addEventListener("click", () => {
  byId("first-open-guide").open=true;
  byId("download-status").textContent = "下载后解压，双击“启动.command”。若提示“Apple 无法验证”，请按下方首次打开步骤操作。";
});
byId("download-windows").addEventListener("click",()=>{
  byId("windows-guide").open=true;
  byId("download-status").textContent="请完整解压，再双击“启动.cmd”。首次使用先按下方说明准备 Apple 手机连接服务。";
});
if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) byId("mobile-notice").hidden=false;
byId("address-form").addEventListener("submit", event => {
  event.preventDefault();
  const status=byId("address-status");
  try {
    const address = new URL(byId("local-address").value.trim());
    if (address.protocol!=="http:" || !["127.0.0.1","localhost"].includes(address.hostname) || !address.port || Number(address.port)<1024 || Number(address.port)>65535 || address.username || address.password || address.search || address.hash || address.pathname!=="/") throw new Error();
    byId("open-console").href=address.href;
    status.classList.remove("error");
    status.textContent="地址已更新，点击上方“打开本机控制台”。";
  } catch (_) {
    status.classList.add("error");
    status.textContent="请填写启动窗口显示的完整本机网址，例如 http://127.0.0.1:8765/。";
  }
});

const guideImageDialog=byId("guide-image-dialog");
for(const link of document.querySelectorAll("[data-guide-image]")){
  link.addEventListener("click",event=>{
    if(typeof guideImageDialog.showModal!=="function")return;
    event.preventDefault();
    byId("guide-image-title").textContent=link.dataset.title;
    byId("guide-image-full").src=link.href;
    byId("guide-image-full").alt=link.querySelector("img").alt;
    guideImageDialog.showModal();
  });
}
byId("guide-image-close").addEventListener("click",()=>guideImageDialog.close());
guideImageDialog.addEventListener("click",event=>{if(event.target===guideImageDialog)guideImageDialog.close();});
