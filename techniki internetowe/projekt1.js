/* animacja 1 */
var B2_p = [-200,0];	
var B1_p = [200,0];
var pi = Math.PI;
var fi = pi, fi1 = 0, fi2;
var teta = pi - 0.1, teta1 = 0, teta2;	

var L = 50;
	
/*animacja 2*/
var B3_p = [-200,0];	
var B4_p = [200,0];
var Fi = pi, Fi1 = 0, Fi2;
var Teta = pi - 0.1, Teta1 = 0, Teta2;	

function draw(event){
	var canvas = document.getElementById('canvas1');
	var ctx = canvas.getContext('2d');
	x = canvas.width;
	y = canvas.height;
	
	var canvas2 = document.getElementById('canvas2');
	var ctx2 = canvas2.getContext('2d');
	X = canvas2.width;
	Y = canvas2.height;
		
	var G = document.form.A2_G.value;
	var g = document.form.A1_G.value;	
	var dt = document.form.dt.value;
	
	B1_p[0] = L*Math.sin(fi) + x/2 ;
	B1_p[1] = -L*Math.cos(fi) + y/2 ;
	B2_p[0] = L*Math.sin(fi)+L*Math.sin(teta) + x/2 ;
	B2_p[1] = -L*Math.cos(fi)-L*Math.cos(teta) + y/2 ;
	
	B3_p[0] = L*Math.sin(Fi) + X/2;
	B3_p[1] = -L*Math.cos(Fi) + Y/2;
    B4_p[0] = L*Math.sin(Fi)+L*Math.sin(Teta) + X/2;
	B4_p[1] = -L*Math.cos(Fi)-L*Math.cos(Teta) + Y/2;
	
	requestAnimationFrame(draw);
	ctx.clearRect(0,0,x,y);
	ctx2.clearRect(0,0,X,Y);
	
	ctx.beginPath();
	
	ctx.moveTo(B1_p[0],B1_p[1]);
	ctx.lineTo(B2_p[0],B2_p[1]);
	
	ctx.moveTo(x/2,y/2);
	ctx.lineTo(B1_p[0],B1_p[1]);
	
	ctx.strokeStyle = 'black';
	ctx.stroke();
	
	ctx2.beginPath();
	
	ctx2.moveTo(B3_p[0],B3_p[1]);
	ctx2.lineTo(B4_p[0],B4_p[1]);
	
	ctx2.moveTo(X/2,Y/2);
	ctx2.lineTo(B3_p[0],B3_p[1]);
	
	ctx2.strokeStyle = 'black';
	ctx2.stroke();
	
	ctx.beginPath();
	
	ctx.arc(B1_p[0],B1_p[1],L/5,0,Math.PI*2,false);
	ctx.strokeStyle = 'blue';
	ctx.fillStyle = 'blue';
	ctx.stroke();
	ctx.fill();
	
	ctx2.beginPath();
	ctx2.arc(B3_p[0],B3_p[1],L/5,0,Math.PI*2,false);
	ctx2.strokeStyle = 'blue';
	ctx2.fillStyle = 'blue';
	ctx2.stroke();
	ctx2.fill();
	
	ctx.beginPath();
	ctx.arc(B2_p[0],B2_p[1],L/5,0,Math.PI*2,false);
	ctx.strokeStyle = 'red';
	ctx.fillStyle = 'red';
	ctx.stroke();
	ctx.fill();
	
	ctx2.beginPath();
	ctx2.arc(B4_p[0],B4_p[1],L/5,0,Math.PI*2,false);
	ctx2.strokeStyle = 'red';
	ctx2.fillStyle = 'red';
	ctx2.stroke();
	ctx2.fill();


		
	fi2 = -(g/L)*(2*Math.sin(fi)-Math.sin(teta)*Math.cos(fi-teta))-(1/2)*fi1*fi1*Math.sin(2*fi-2*teta)-teta1*teta1*Math.sin(fi-teta);
    fi2 = fi2 / (1+Math.sin(fi-teta)*Math.sin(fi-teta));
    
    teta2 =  -(g/L)*(2*Math.sin(teta)-2*Math.sin(fi)*Math.cos(fi-teta))+(1/2)*teta1*teta1*Math.sin(2*fi-2*teta)+2*fi1*fi1*Math.sin(fi-teta);
    teta2 = teta2 / (1+Math.sin(fi-teta)*Math.sin(fi-teta));

    fi1 = fi1 + fi2*dt;
    teta1 = teta1 + teta2*dt;
    
    fi = fi + fi1*dt;
    teta = teta + teta1*dt;
	
	B1_p[0] = L*Math.sin(fi) + x/2 ;
	B1_p[1] = -L*Math.cos(fi) + y/2 ;
	
	B2_p[0] = L*Math.sin(fi)+L*Math.sin(teta) + x/2 ;
	B2_p[1] = -L*Math.cos(fi)-L*Math.cos(teta) + y/2 ;
	
	
	
    Fi2 = -(G/L)*(2*Math.sin(Fi)-Math.sin(Teta)*Math.cos(Fi-Teta))-(1/2)*Fi1*Fi1*Math.sin(2*Fi-2*Teta)-Teta1*Teta1*Math.sin(Fi-Teta);
    Fi2 = Fi2 / (1+Math.sin(Fi-Teta)*Math.sin(Fi-Teta));
    
    Teta2 =  -(G/L)*(2*Math.sin(Teta)-2*Math.sin(Fi)*Math.cos(Fi-Teta))+(1/2)*Teta1*Teta1*Math.sin(2*Fi-2*Teta)+2*Fi1*Fi1*Math.sin(Fi-Teta);
    Teta2 = Teta2 / (1+Math.sin(Fi-Teta)*Math.sin(Fi-Teta));

    Fi1 = Fi1 + Fi2*dt
    Teta1 = Teta1 + Teta2*dt
    
    Fi = Fi + Fi1*dt
    Teta = Teta + Teta1*dt
	
	 
    B3_p[0] = L*Math.sin(Fi) + X/2;
	B3_p[1] = -L*Math.cos(Fi) + Y/2;
    B4_p[0] = L*Math.sin(Fi)+L*Math.sin(Teta) + X/2;
	B4_p[1] = -L*Math.cos(Fi)-L*Math.cos(Teta) + Y/2;

}