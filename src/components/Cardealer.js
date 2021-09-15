import React from "react";
import "./Cardealer";
import Nota from "./Nota";
import mobil2 from "../components/mobil2.jpg";

class Cardealer extends React.Component {
  state = {
    nota: false,
  };

  Komponen2 = () => {
    this.setState(() => {
      return {
        nota: !this.state.nota,
      };
    });
  };

  constructor(props) {
    super(props);
    //this.carquantity = this.carquantity.bind(this);
    this.state = {
      mobil: [["Lamborghini Aventador", 300000, mobil2]],
      beli: {
        belanja: 0,
      },

      Hargamobil: 0,
      Quantity: 0,
      HargaTotal: 0,
    };

  }

  componentDidUpdate(){
    alert("Update Harga Total");
  }

  componentDidMount() {
    window.onbeforeunload = function() {
        return "";
    }.bind(this);
}

  /*   componentDidMount() {
    alert(`Mount triggered!`);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    alert(`Component Updates! State angka sebelumnya:
    ${prevState.angka}`);
  }
  componentWillUnmount() {
    alert("I will be gone :(");
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return window.confirm("Haruskah Component ini di-Update?");
  } */

  /*   handleCalculation= () => {
    const {
      belanja,
    } = this.state.beli
    var hasil = belanja
    this.setState({
      ...this.state.beli,
    })
  } */

  /*   handleChangeAsupan(e) {
    e.preventDefault();
    const { mobil } = this.state;
    const { name } = e.target;
    var index = e.nativeEvent.target.selectedIndex;
    const { value } = e.nativeEvent.target[index];
    this.setState(
      {
        menu: {
          ...menu,
          [name]: Number(value),
        },
      },
      this.handleCalculation
    );
  } */

  render() {
    const { Hargamobil, Quantity, HargaTotal, mobil, image } = this.state;

    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            MAU BELI MOBIL APA?
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {mobil.map((product, index) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product[2]}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product[0]}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product[1]}
                  </p>
                </div>

                <div class="custom-number-input h-10 w-32">
                  <label
                    for="custom-input-number"
                    class="w-full text-gray-700 text-sm font-semibold"
                  >
                    Quantity
                  </label>
                  <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                    <button
                      data-action="decrement"
                      class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                      onClick={() => this.setState({ Quantity: Quantity - 1 })}
                    >
                      <span class="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input
                      type="number"
                      class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                      name="custom-input-number"
                      value={this.state.Quantity}
                    ></input>
                    <button
                      data-action="increment"
                      class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                      onClick={() => this.setState({ Quantity: Quantity + 1 })}
                    >
                      <span class="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500 | mx-36">
          <button data action="beli" onClick={this.Komponen2}>
            <img
              class="w-16 h-16 object-cover"
              src="https://www.pngitem.com/pimgs/m/195-1951339_payment-computer-icons-money-logo-payment-terms-icon.png"
              alt=""
            />
          </button>
          <div class="flex flex-col justify-center">
            <p class="text-gray-900 dark:text-gray-300 font-semibold">
              Total Harga
            </p>
            <p class="text-black dark:text-gray-100 text-justify font-semibold">
              {this.state.Quantity * this.state.mobil[0][1]}
            </p>
          </div>
        </div>
        <div className="px-8 py-4">
          {this.state.nota && <Nota />}
        </div>
      </div>
    );
  }

  componentWillUnmount(){
    alert("Data berhasil diubah.")
  }
}

export default Cardealer;
