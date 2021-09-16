import React from "react";
import "./Cardealer";
import "./Nota";

class Nota extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			confirm: "Apakah Anda benar-benar yakin akan pembelian ini?",
			counter: "Ayo jangan ganti-ganti mulu",
		};
	}

	componentWillUpdate(){
		console.log(this.state.counter);
	}

	render() {
		return(
			<div className="mx-auto py-4 px-4">
				<h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
    		  		Konfirmasi Pembayaran
   				</h3>
   			<div className="mt-4 px-24 text-0xl flex font-normal text-left">
   			<br/>
   				<p>
   					{this.state.confirm}
   				</p>
   			</div>
   			<div className="mt-4 px-24 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
   				<button
   					class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-32 rounded-r cursor-pointer"
   					onClick={() => this.setState({ confirm: "Yasudah kalau mau beli.."})}
   				>
   					YA
   				</button>
   				<button
   					class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-32 rounded-r cursor-pointer"
   					onClick={() => this.setState({ confirm: "Gimana sih udah mampir ga beli.."})}
   				>
   					TIDAK
   				</button>
   				<button
   					class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-32 rounded-r cursor-pointer"
   					onClick={() => this.setState({ confirm: "Lah malah gatau.."})}
   				>
   					GATAU AH
   				</button>
   			</div>
   		</div>
    )
	}
}

export default Nota;