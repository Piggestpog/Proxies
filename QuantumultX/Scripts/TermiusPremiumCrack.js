/*
Termius Premium Subscription Unlock (By Piggestpog)
Note: 需要设备越狱后安装SSL Kill Switch 2插件, 以禁用SSL Pinning, 否则会出现MITM Fail的错误
Update Date: 2022/5/27
Statement of Use: 此脚本仅供学习与交流，请勿转载与贩卖

[rewrite_local]
https:\/\/api\.termius\.com\/api\/v4\/bulk\/account\/ url script-response-body 
