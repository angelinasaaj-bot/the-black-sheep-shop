export default function BlackSheepBakery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffaf4] via-[#f8f1e7] to-[#f3e5d3] text-[#2d1f17] overflow-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#2d1f17] text-white flex items-center justify-center font-bold text-lg shadow-lg">
              BS
            </div>
            <div>
              <h1 className="text-xl font-bold">Black Sheep Bakery</h1>
              <p className="text-xs text-gray-500">Luxury Bakery & Cafe</p>
            </div>
          </div>

          <div className="hidden md:flex items-center bg-[#f5ede2] rounded-full p-1 shadow-inner">
            <button className="px-5 py-2 rounded-full bg-[#2d1f17] text-white text-sm font-medium">Delivery</button>
            <button className="px-5 py-2 rounded-full text-sm font-medium text-gray-600">Takeaway</button>
          </div>

          <div className="hidden lg:flex flex-1 max-w-xl mx-6">
            <div className="w-full bg-white rounded-full shadow-lg border border-[#eee3d5] px-5 py-3 flex items-center gap-3">
              <input
                type="text"
                placeholder="Search croissants, pizza, desserts..."
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:flex px-5 py-3 rounded-full bg-white shadow-md border border-[#eee3d5] text-sm font-medium hover:scale-105 transition-all duration-300">
              Login
            </button>

            <button className="relative px-5 py-3 rounded-full bg-[#2d1f17] text-white shadow-xl hover:scale-105 transition-all duration-300">
              Cart
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#ff7b54] text-xs flex items-center justify-center font-bold">
                3
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/50 shadow-lg text-sm font-medium">
            Freshly baked every morning ✨
          </div>

          <div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              Premium Bakery <br />
              Experience Delivered.
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
              Discover handcrafted desserts, artisan pizzas, creamy pastas, and signature bakery treats designed with modern luxury flavors.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-2xl bg-[#2d1f17] text-white font-semibold shadow-2xl hover:scale-105 transition-all duration-300">
              Order Now
            </button>

            <button className="px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-lg border border-white/40 shadow-xl font-semibold hover:scale-105 transition-all duration-300">
              Explore Menu
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              ['50K+', 'Happy Customers'],
              ['120+', 'Menu Items'],
              ['4.9★', 'Customer Rating'],
            ].map((item, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-xl rounded-3xl p-5 shadow-lg border border-white/40">
                <h3 className="text-2xl font-black">{item[0]}</h3>
                <p className="text-sm text-gray-500 mt-1">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[#f7cfa2] blur-[120px] opacity-40 rounded-full"></div>

          <div className="relative bg-white/30 backdrop-blur-2xl rounded-[40px] border border-white/40 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop"
              alt="Bakery"
              className="rounded-[30px] h-[620px] w-full object-cover"
            />

            <div className="absolute bottom-10 left-10 right-10 bg-white/70 backdrop-blur-2xl rounded-3xl p-6 border border-white/40 shadow-xl flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Today Special</p>
                <h3 className="text-2xl font-bold">Truffle Cheese Pizza</h3>
              </div>
              <button className="px-6 py-3 rounded-2xl bg-[#2d1f17] text-white font-semibold">
                Add
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="sticky top-[88px] z-40 bg-white/70 backdrop-blur-xl border-y border-white/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 overflow-x-auto">
          <div className="flex gap-4 min-w-max">
            {['Pizza', 'Burgers', 'Sandwiches', 'Pasta', 'Bakery', 'Desserts', 'Beverages', 'Combos'].map((item, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  index === 4
                    ? 'bg-[#2d1f17] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-[#2d1f17] hover:text-white shadow-md'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-[4px] text-[#b0845c] font-semibold">Popular Menu</p>
            <h2 className="text-4xl lg:text-5xl font-black mt-2">Chef Curated Favorites</h2>
          </div>

          <button className="hidden md:flex px-6 py-3 rounded-2xl bg-white shadow-lg border border-[#eadcc8] font-medium hover:scale-105 transition-all duration-300">
            View Full Menu
          </button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[
            {
              title: 'Smoked Truffle Pizza',
              price: '₹499',
              image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop',
            },
            {
              title: 'Classic Cheeseburger',
              price: '₹299',
              image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',
            },
            {
              title: 'Chocolate Croissant',
              price: '₹189',
              image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop',
            },
            {
              title: 'Creamy Alfredo Pasta',
              price: '₹349',
              image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop',
            },
            {
              title: 'Belgian Waffle Dessert',
              price: '₹259',
              image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop',
            },
            {
              title: 'Cold Coffee Deluxe',
              price: '₹149',
              image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-2xl rounded-[34px] border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-[#ff7b54] text-white text-xs font-bold shadow-lg">
                  Bestseller
                </div>

                <div className="absolute top-5 right-5 bg-white/80 backdrop-blur-xl px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                  ⭐ 4.9
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <span className="w-4 h-4 rounded-full bg-green-500"></span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Fresh ingredients, handcrafted recipe, premium bakery quality with signature flavors.
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span>⏱ 20 mins</span>
                  <span>🔥 Popular Choice</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Starting From</p>
                    <h4 className="text-3xl font-black">{item.price}</h4>
                  </div>

                  <button className="px-6 py-3 rounded-2xl bg-[#2d1f17] text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offers */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-16">
        <div className="bg-[#2d1f17] rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2d1f17] to-[#5e3d2c]"></div>

          <div className="relative z-10 grid lg:grid-cols-2 items-center gap-10 p-10 lg:p-16">
            <div>
              <div className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-6">
                Weekend Special Offer
              </div>

              <h2 className="text-5xl font-black text-white leading-tight">
                Flat 40% OFF <br />
                On Bakery Combos
              </h2>

              <p className="text-white/70 mt-6 text-lg max-w-lg">
                Order handcrafted croissants, premium coffee, and signature desserts with exclusive combo deals.
              </p>

              <button className="mt-8 px-8 py-4 rounded-2xl bg-white text-[#2d1f17] font-bold shadow-xl hover:scale-105 transition-all duration-300">
                Claim Offer
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1200&auto=format&fit=crop"
              alt="Offer"
              className="rounded-[32px] h-[420px] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Cart Drawer Preview */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10">
          <div className="bg-white/70 rounded-[40px] border border-white/40 shadow-xl p-10 backdrop-blur-2xl">
            <h2 className="text-4xl font-black mb-6">Restaurant Information</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-lg mb-2">Opening Hours</h4>
                  <p className="text-gray-600">Mon - Sun : 8:00 AM - 11:00 PM</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Delivery Time</h4>
                  <p className="text-gray-600">25 - 35 Minutes</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">Location</h4>
                  <p className="text-gray-600">Connaught Place, New Delhi</p>
                </div>
              </div>

              <div>
                <iframe
                  title="map"
                  className="w-full h-64 rounded-3xl"
                  src="https://maps.google.com/maps?q=Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="sticky top-32 h-fit bg-white/70 backdrop-blur-2xl rounded-[36px] border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black">Your Cart</h3>
              <span className="px-4 py-2 rounded-full bg-[#2d1f17] text-white text-sm">3 Items</span>
            </div>

            <div className="space-y-5">
              {['Truffle Pizza', 'Cold Coffee', 'Chocolate Croissant'].map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-md">
                  <div>
                    <h4 className="font-bold">{item}</h4>
                    <p className="text-sm text-gray-500">₹199</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="w-8 h-8 rounded-full bg-[#f3e5d3] font-bold">-</button>
                    <span className="font-semibold">1</span>
                    <button className="w-8 h-8 rounded-full bg-[#2d1f17] text-white font-bold">+</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 border-t border-[#eadcc8] pt-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹647</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>₹49</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>GST</span>
                <span>₹32</span>
              </div>

              <div className="flex justify-between text-2xl font-black pt-4 border-t border-[#eadcc8]">
                <span>Total</span>
                <span>₹728</span>
              </div>
            </div>

            <button className="mt-8 w-full py-5 rounded-2xl bg-[#2d1f17] text-white font-bold text-lg shadow-xl hover:scale-[1.02] transition-all duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-[#b0845c] text-sm font-semibold">Testimonials</p>
          <h2 className="text-5xl font-black mt-4">Loved By Foodies</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white/70 backdrop-blur-2xl rounded-[34px] p-8 shadow-xl border border-white/40 hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-6">⭐️⭐️⭐️⭐️⭐️</div>
              <p className="text-gray-600 leading-relaxed text-lg">
                “One of the best bakery ordering experiences I’ve ever had. The UI feels premium and the food quality is incredible.”
              </p>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
                  alt="User"
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold">Sophia Mehra</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Checkout Section */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-20">
        <div className="bg-white/70 backdrop-blur-2xl rounded-[40px] p-10 lg:p-16 border border-white/40 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black mb-8">Checkout Details</h2>

              <div className="space-y-5">
                <input className="w-full px-5 py-4 rounded-2xl bg-white border border-[#eadcc8] outline-none" placeholder="Full Name" />
                <input className="w-full px-5 py-4 rounded-2xl bg-white border border-[#eadcc8] outline-none" placeholder="Phone Number" />
                <textarea className="w-full px-5 py-4 rounded-2xl bg-white border border-[#eadcc8] outline-none h-32" placeholder="Delivery Address"></textarea>

                <div className="grid grid-cols-3 gap-4">
                  <button className="py-4 rounded-2xl bg-[#2d1f17] text-white font-semibold">UPI</button>
                  <button className="py-4 rounded-2xl bg-[#f5ede2] font-semibold">Card</button>
                  <button className="py-4 rounded-2xl bg-[#f5ede2] font-semibold">COD</button>
                </div>
              </div>
            </div>

            <div className="bg-[#2d1f17] rounded-[32px] p-10 text-white flex flex-col justify-between shadow-2xl">
              <div>
                <p className="uppercase tracking-[3px] text-white/60 text-sm">Order Summary</p>
                <h3 className="text-4xl font-black mt-4">Ready To Place Your Order?</h3>

                <div className="mt-10 space-y-4 text-white/80">
                  <div className="flex justify-between">
                    <span>Items Total</span>
                    <span>₹647</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>₹49</span>
                  </div>

                  <div className="flex justify-between text-2xl text-white font-black border-t border-white/20 pt-5 mt-5">
                    <span>Total</span>
                    <span>₹728</span>
                  </div>
                </div>
              </div>

              <button className="mt-12 w-full py-5 rounded-2xl bg-white text-[#2d1f17] font-black text-lg hover:scale-[1.02] transition-all duration-300">
                Place Order Successfully
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d1f17] text-white py-16 rounded-t-[50px] mt-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-black">Black Sheep Bakery</h2>
            <p className="text-white/70 mt-4 leading-relaxed">
              Premium bakery ordering platform designed with luxury UI aesthetics and modern online ordering experience.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li>Home</li>
              <li>Menu</li>
              <li>Offers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li>+91 9876543210</li>
              <li>hello@blacksheepbakery.com</li>
              <li>Delhi, India</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {['Instagram', 'Twitter', 'Facebook'].map((item, index) => (
                <button key={index} className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white hover:text-[#2d1f17] transition-all duration-300">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          © 2026 Black Sheep Bakery. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
