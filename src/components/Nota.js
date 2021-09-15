import React from "react";
import "./Nota";

class Nota extends React.Component {
	render() {
		return(
			<div className="mx-auto py-4 px-4">
				<h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
    		  		Nota Pembelian
   				</h3>
   			<div className="mt-4 px-24 text-0xl flex font-normal text-left">
   			<br/>
   				<p>
   					Nama Mobil: Lamborghini Aventador<br/>
   					Harga per satuan: 300000<br/>
   				</p>
   			</div>
   		</div>
    )
	}
}

export default Nota;