arr = [
	{
		name: "Dictionary", 
		url:`fetch%28%60https%3A%2F%2Fapi.dictionaryapi.dev%2Fapi%2Fv2%2Fentries%2Fen%2F%24%7Bprompt%28%22Word...%22%29%7D%60%29.then%28i%3D%3Ei.json%28%29.then%28i%3D%3Ealert%28i%5B0%5D.meanings%5B0%5D.definitions.map%28i%3D%3E%60%3E%20%24%7Bi.definition%7D%5Cn%20%20%20%3E%22%24%7Bi.example%7D%22%60%29.join%28%22%5Cn%22%29%29%29%29`
	}, 
	{
		name: "Synonyms", 
		url: `fetch%28%60https%3A%2F%2Fapi.dictionaryapi.dev%2Fapi%2Fv2%2Fentries%2Fen%2F%24%7Bprompt%28%22Word...%22%29%7D%60%29.then%28i%3D%3Ei.json%28%29.then%28i%3D%3Ealert%28i%5B0%5D.meanings%5B0%5D.definitions.map%28i%3D%3E%60%3E%20%24%7Bi.definition%7D%5Cn%20%20%20%3E%24%7Bi.synonyms.join%28%22%2C%20%22%29%7D%60%29.join%28%22%5Cn%22%29%29%29%29`
	}, 
	{
		name: "Antonyms", 
		url: `fetch%28%60https%3A%2F%2Fapi.dictionaryapi.dev%2Fapi%2Fv2%2Fentries%2Fen%2F%24%7Bprompt%28%22Word...%22%29%7D%60%29.then%28i%3D%3Ei.json%28%29.then%28i%3D%3Ealert%28i%5B0%5D.meanings%5B0%5D.definitions.map%28i%3D%3E%60%3E%20%24%7Bi.definition%7D%5Cn%20%20%20%3ENOT%3A%20%24%7Bi.antonyms.join%28%22%2C%20%22%29%7D%60%29.join%28%22%5Cn%22%29%29%29%29`
	},
	{
	name: "Calculator", 
	url: `eval%28%27function%20calc%28%29%7B_o%3Dprompt%28_t%2C_z%29%3Bif%28_o%21%3D%5C%27%5C%27%26%26_o%21%3Dnull%26%26_o.toUpperCase%28%29%3D%3D_o.toLowerCase%28%29%29_z%3Deval%28_o%29%3B%7D%27%29%3B_t%3D%27Calculate%27%3B_z%3D%27%27%3Bcalc%28%29%3Bwhile%28_o%21%3D%27%27%26%26_o%21%3Dnull%26%26_o.toUpperCase%28%29%3D%3D_o.toLowerCase%28%29%29calc%28%29`
},
{
	name: "Get any defly.io skin", 
	url: `localStorage.playerSkin%3Dprompt%28%22Skin%22%29%3B%20void%200`
}, 
{
	name: "Play Snake", 
	url: `for%28Q%3D64%2Cm%3Db%3DQ%2AQ%2Ca%3D%5BP%3Dl%3Du%3Dd%3Dp%3DS%3Dw%3D0%5D%2Cu%3D89%2Cf%3D%28h%3Dj%3Dt%3D%28b%2BQ%29%2F2%29-1%2C%28B%3D%28D%3Ddocument%29.body%29.appendChild%28x%3DD.createElement%28%27p%27%29%29%2C%28X%3Dx.style%29.position%3D%27fixed%27%2CX.left%3DX.top%3D0%2CX.background%3D%27%23FFF%27%2Cx.innerHTML%3D%27%3Cp%3E%3C%2Fp%3E%3Ccanvas%3E%27%2Cv%3D%28s%3Dx.childNodes%29%5B0%5D%2C%28s%3Ds%5B1%5D%29.width%3Ds.height%3DQ%2A5%2Cc%3Ds.getContext%28%272d%27%29%2Conkeydown%3Donblur%3DF%3Dfunction%28e%2Cz%29%7Bz%3Fa%5Bf%5D%3F%28w%2B%3Dm%2Cf%3DMath.random%28l%2B%3D8%29%2A%28R%3DQ-2%29%2AR%7C%28u%3D0%29%2CF%28f%2B%3DQ%2B1%2B%28f%2FR%7C0%29%2A2%2Cz%29%29%3AF%28f%29%3Ae%3C0%3F%28l%3F--l%3A%28y%3Dt%2Ct%3Da%5Bt%5D-2%2CF%28y%29%29%2CS%2B%3D%28w%2A%3D.8%29%2F4%2Cm%3D999%2F%28u%2B%2B%2B10%29%2Ca%5Bh%2B%3D%5B-1%2C-Q%2C1%2CQ%5D%5Bd%3Dp%5D%5D%3FB.removeChild%28x%2Calert%28%27Game%20Over%27%29%29%3A%28F%28h%29%2CF%28e%2Cj%3Dh%29%2Cv.innerHTML%3DP%3F%28setTimeout%28F%2C50%2Ce%2C0%29%2CS%7C0%29%3A%27Press%20P%27%29%29%3A-e%3F%28y%3D%28a%5Be%5D%3De%3CQ%7Ce%3E%3DQ%2AQ-Q%7C%21%28e%25Q%29%7Ce%25Q%3D%3DQ-1%7C%28e%3D%3Dh%29%2A2%29%2B%28e%3D%3Df%29%2Ce%3D%3Dh%26%26%28a%5Bj%5D%3D2%2Bh%29%2Cc.fillStyle%3D%27hsl%28%27%2B%21a%5Be%5D%2A99%2B%27%2C%27%2Bm%2A2%2B%27%25%2C%27%2By%2A50%2B%27%25%29%27%2Cc.fillRect%28e%25Q%2A5%2C%28e%2FQ%7C0%29%2A5%2C5%2C5%29%29%3AisNaN%28y%3De.keyCode-37%29%7Cy%3D%3D43%3F%28P%3Dy%26%26%21P%29%26%26F%28-1%29%3Ap%3D%21P%7Cy%26-4%7C%21%28y%5E2%5Ed%29%3Fp%3Ay%3Breturn%211%7D%3B--b%3BF%28b%29%29%3Bvoid%20F%28-1%29`
}, 
{
	name: "Play Pop Website", 
	url: "var%20s%3Ddocument.createElement%28%27script%27%29%3Bs.type%3D%27text%2Fjavascript%27%3Bs.onerror%3Dfunction%28e%29%7Balert%28%27Failed%20to%20load%20the%20script.%20The%20site%5C%27s%20Content%20Security%20Policy%20might%20be%20blocking%20it.%20Feel%20free%20to%20try%20again.%27%29%3B%7D%3Bdocument.body.appendChild%28s%29%3Bs.src%3D%27https%3A%2F%2Fblog.roysolberg.com%2Fjs%2Fdom2.min.js%27%3Bvoid%280%29%3B"
}, 
{
	name: "Inspect Element", 
	url: `if%28document.designMode%20%3D%3D%20%27off%27%29%7B%20document.designMode%3D%27on%27%20%7D%20else%20%7B%20document.designMode%3D%27off%27%20%7D%20void%200`
},
];

window.onload = (event) => {
	document.getElementById("content").innerHTML = arr.map(i=>`<a href="javascript:${i.url}" class="waves-effect waves-light btn amber">${i.name}</a>`).join("<br /><br />")
}
