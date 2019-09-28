 $(function() {
var arr_wx = [

'ruxue52013142','wanyue013','yts4319','yts43013'

];
var wx_index = Math.floor((Math.random() * arr_wx.length));
var stxlwx = arr_wx[wx_index];
var wx_img = "<img src=\'./wx/" + arr_wx[wx_index] + ".jpg\'  >";
$(".wx_img").html(wx_img);
$(".wx_hao").html(stxlwx);
})