function TheHeader() {
  return (
    <main className="main">
		<div className="container">
			<section className="menu">
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
					<div className="card">
						<img src="img/pizza-plus/pizza-vesuvius.jpg" alt="image" className="card-image"/>
						<div className="card-text">
							<div className="card-heading">
								<h3 className="card-title card-title-reg">Пицца Везувий</h3>
							</div>
						
							<div className="card-info">
								<div className="ingredients">Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец
								                         «Халапенье», соус «Тобаско», томаты.
								</div>
							</div>
						
							<div className="card-buttons">
								<button className="button button-primary button-add-cart">
									<span className="button-card-text">В корзину</span>
									<span className="button-cart-svg"></span>
								</button>
								<strong className="card-price-bold">100 лей</strong>
							</div>
						</div>
				
					</div>
				

					<div className="card">
						<img src="img/pizza-plus/pizza-girls.jpg" alt="image" className="card-image"/>
						<div className="card-text">
							<div className="card-heading">
								<h3 className="card-title card-title-reg">Пицца Девичник</h3>
							</div>
							
							<div className="card-info">
								<div className="ingredients">Соус томатный, постное тесто, нежирный сыр, кукуруза, лук, маслины,
								                         грибы, помидоры, болгарский перец.
								</div>
							</div>
							
							<div className="card-buttons">
								<button className="button button-primary button-add-cart">
									<span className="button-card-text">В корзину</span>
									<span className="button-cart-svg"></span>
								</button>
								<strong className="card-price-bold">110 лей</strong>
							</div>
						</div>
		
					</div>
				

					<div className="card">
						<img src="img/pizza-plus/pizza-oleole.jpg" alt="image" className="card-image"/>
						<div className="card-text">
							<div className="card-heading">
								<h3 className="card-title card-title-reg">Пицца Оле-Оле</h3>
							</div>
							
							<div className="card-info">
								<div className="ingredients">Соус томатный, сыр «Моцарелла», черри, маслины, зелень, майонез
								</div>
							</div>
							
							<div className="card-buttons">
								<button className="button button-primary button-add-cart">
									<span className="button-card-text">В корзину</span>
									<span className="button-cart-svg"></span>
								</button>
								<strong className="card-price-bold">120 лей</strong>
							</div>
						</div>
				
					</div>
					

					<div className="card">
						<img src="img/pizza-plus/pizza-plus.jpg" alt="image" className="card-image"/>
						<div className="card-text">
							<div className="card-heading">
								<h3 className="card-title card-title-reg">Пицца Плюс</h3>
							</div>
					
							<div className="card-info">
								<div className="ingredients">Соус томатный, сыр «Моцарелла», сыр «Чеддер», томаты, пепперони,
								                         телятина, грибы, бекон, болгарский перец.
								</div>
							</div>
							
							<div className="card-buttons">
								<button className="button button-primary button-add-cart">
									<span className="button-card-text">В корзину</span>
									<span className="button-cart-svg"></span>
								</button>
								<strong className="card-price-bold">130 лей</strong>
							</div>
						</div>
					
					</div>
					

					<div className="card">
						<img src="img/pizza-plus/pizza-hawaiian.jpg" alt="image" className="card-image"/>
						<div className="card-text">
							<div className="card-heading">
								<h3 className="card-title card-title-reg">Пицца Гавайская</h3>
							</div>
				
							<div className="card-info">
								<div className="ingredients">Соус томатный, сыр «Моцарелла», ветчина, ананасы</div>
							</div>
							
							<div className="card-buttons">
								<button className="button button-primary button-add-cart">
									<span className="button-card-text">В корзину</span>
									<span className="button-cart-svg"></span>
								</button>
								<strong className="card-price-bold">140 лей</strong>
							</div>
						</div>
						
					</div>
				

					<div className="card">
						<img src="img/pizza-plus/pizza-classic.jpg" alt="image" className="card-image"/>
						<div className="card-text">
							<div className="card-heading">
								<h3 className="card-title card-title-reg">Пицца Классика</h3>
							</div>
							
							<div className="card-info">
								<div className="ingredients">Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина, салями,
								                         грибы.
								</div>
							</div>
							
							<div className="card-buttons">
								<button className="button button-primary button-add-cart">
									<span className="button-card-text">В корзину</span>
									<span className="button-cart-svg"></span>
								</button>
								<strong className="card-price-bold">150 лей</strong>
							</div>
						</div>
						
					</div>
			
				</div>
		
			</section>
		</div>

	  </main>
  );
}

export default TheHeader;
