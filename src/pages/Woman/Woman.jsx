import "../Man/Man.css";

const Woman = () => {
  <div className="productPage">
    <div className="productsItemWrap">
      <h3 className="productsItemTitle">ДЛЯ ЧОЛОВІКІВ</h3>
      <select name="select" id="manSelect" className="manSelect">
        <option value="all">Все</option>
        <option value="asc">Цена по возрастанию</option>
        <option value="desc">Цена по убыванию</option>
      </select>
    </div>
    <div className="filterWrap">
      <div className="filter">
        <nav className="navFilter">
          <Item name="БРЕНДЫ" />
          <Item name="КОЛЛЕКЦИИ" />
          <SizeItem />
          <Price />
        </nav>
      </div>
      <div className="productsHolder">
        {data.map(
          (item) =>
            item.gender === "woman" && (
              <Product
                name={item.id}
                gender={item.gender}
                key={item.id}
                price={item.price}
              />
            )
        )}
      </div>
    </div>
  </div>;
};

export default Woman;
