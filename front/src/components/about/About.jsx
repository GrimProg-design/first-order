import "./About.css";
import isukkul from "../../assets/places/isuk-kul.jpeg"
import sonkul from "../../assets/places/son-kul.jpeg"
import djetyoguz from "../../assets/places/djety-oguz.jpeg"
import alaarcha from "../../assets/places/ala-archa.jpeg"
import saryckeleck from "../../assets/places/sary-cheleck.jpeg"


export default function Places() {
  const places = [
    {
      name: "Иссык-Куль",
      desc: "Жемчужина Кыргызстана — огромное горное озеро с кристально чистой водой и золотыми пляжами.",
      img: isukkul,
    },
    {
      name: "Сон-Куль",
      desc: "Высокогорное озеро на высоте 3016 м, где можно почувствовать дух кочевой жизни и бескрайнюю свободу.",
      img: sonkul,
    },
    {
      name: "Джети-Огуз",
      desc: "Легендарные красные скалы в форме «Семи быков» — одно из самых красивых мест Иссык-Кульской области.",
      img: djetyoguz,
    },
    {
      name: "Ала-Арча",
      desc: "Национальный парк рядом с Бишкеком — горы, водопады и свежий воздух прямо у столицы.",
      img: alaarcha,
    },
    {
      name: "Озеро Сары-Челек",
      desc: "Уникальное горное озеро, спрятанное среди хвойных лесов и утопающих в тишине гор.",
      img: saryckeleck,
    },
  ];

  return (
    <div className="places">
      <h1>Самые живописные места Кыргызстана</h1>
      <div className="places-list">
        {places.map((place, index) => (
          <div key={index} className="place-card">
            <img src={place.img} alt={place.name} />
            <div className="place-info">
              <h2>{place.name}</h2>
              <p>{place.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
