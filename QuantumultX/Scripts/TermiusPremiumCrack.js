/*
Termius Premium Subscription Unlock (By Piggestpog)
Note: 需要设备越狱后安装SSL Kill Switch 2插件, 以禁用SSL Pinning, 否则会出现MITM Fail的错误
      需要登陆账号 无时限 显示"0 days before renewal"但无伤大雅
Update Date: 2022/5/27
Statement of Use: 此脚本仅供学习与交流，请勿转载与贩卖

[rewrite_local]
https:\/\/api\.termius\.com\/api\/v4\/bulk\/account\/ url script-response-body https://raw.githubusercontent.com/Piggestpog/Proxies/main/QuantumultX/Scripts/TermiusPremiumCrack.js
[mitm]
api.termius.com
*/

let obj=JSON.parse($response.body)
obj.account["pro_mode"] = true;
obj.account["plan_type"] = "Premium";
obj.account["user_type"] = "Premium";
$done({body:JSON.stringify(obj)})
