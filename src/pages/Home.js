
function Home() {
  return (
    <main className="main">
		<div className="container">
			<section className="container-promo swiper-container">
				<div className="swiper-wrapper">
					<section className="swiper-slide promo pizza">
						<h1 className="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
						<p className="promo-text">
							Блюда из любимого ресторана курьер привезет в кратчайшие сроки
						</p>
					</section>
					<section className="swiper-slide promo kebab">
						<h1 className="promo-title">Шашлыки на майские <br /> со скидкой 35%</h1>
						<p className="promo-text">
							Закажите шашлыки в любом ресторане до 10 мая и получите скидку по промокоду OMAGAD
						</p>
					</section>
					<section className="swiper-slide promo vegetables">
						<h1 className="promo-title">Скидка 20% на всю еду <br /> по промокоду LOVE.JS</h1>
						<p className="promo-text">
							Блюдо из ресторана привезут вместе с двумя подарочными книгами по фронтенду
						</p>
					</section>
					<section className="swiper-slide promo sushi">
						<h1 className="promo-title">Сеты со скидкой до 30% <br /> в ресторанах</h1>
						<p className="promo-text">
							Скидки на сеты до 30 мая по промокоду DADADA
						</p>
					</section>
				</div>
			</section>
			<section className="restaurants">
				<div className="section-heading">
					<h2 className="section-title">Рестораны</h2>
					<label className="search">
						<input type="text" className="input input-search" placeholder="Поиск блюд и ресторанов"/>
					</label>
				</div>
				<div className="cards cards-restaurants">
					
				</div>
				
			</section>
			<section className="menu hide">
				<div className="section-heading">
					<h2 className="section-title restaurant-title">Пицца Плюс</h2>
					<div className="card-info">
						<div className="rating">
							4.5
						</div>
						<div className="price">От 100 лей</div>
						<div className="category">Пицца</div>
					</div>
					
				</div>
				<div className="cards cards-menu">

				</div>
				
			</section>

		</div>
	
	  </main>
  );
}

export default Home;
