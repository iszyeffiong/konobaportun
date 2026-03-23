export interface MenuItem {
  id: string;
  name: { en: string; me: string };
  description: { en: string; me: string };
  price: number;
  priceLabel: string;
  weight?: string;
}

export interface MenuCategory {
  category: { en: string; me: string };
  items: MenuItem[];
}

let idCounter = 0;
const makeId = () => `item-${++idCounter}`;

export const foodMenu: MenuCategory[] = [
  {
    category: { en: "Cold Appetizers", me: "Hladna predjela" },
    items: [
      { id: makeId(), name: { en: "Fish Pate", me: "Riblja pašteta" }, description: { en: "Homemade fish pate", me: "Domaća riblja pašteta" }, price: 13, priceLabel: "€13", weight: "150 gr" },
      { id: makeId(), name: { en: "Octopus Salad", me: "Salata od hobotnice" }, description: { en: "Fresh octopus salad", me: "Svježa salata od hobotnice" }, price: 23.5, priceLabel: "€23.5", weight: "170 gr" },
      { id: makeId(), name: { en: "Seafood Salad", me: "Salata od morskih plodova" }, description: { en: "Mixed seafood salad", me: "Mješovita salata od morskih plodova" }, price: 17.5, priceLabel: "€17.5", weight: "180 gr" },
      { id: makeId(), name: { en: "Tuna Tartare on Mango Sauce", me: "Tartar od tune na umaku od manga" }, description: { en: "Tuna tartare served on mango sauce", me: "Tartar od tune serviran na umaku od manga" }, price: 22, priceLabel: "€22", weight: "200 gr" },
      { id: makeId(), name: { en: "Shrimp Tartare", me: "Tartar od škampi" }, description: { en: "Fresh shrimp tartare", me: "Svježi tartar od škampi" }, price: 22, priceLabel: "€22", weight: "180 gr" },
      { id: makeId(), name: { en: "Prosciutto and Cheese (domestic)", me: "Pršut i sir (domaći)" }, description: { en: "Domestic prosciutto and cheese platter", me: "Domaći pršut i sir" }, price: 16, priceLabel: "€16", weight: "250 gr" },
      { id: makeId(), name: { en: "Cheese Selection", me: "Izbor sireva" }, description: { en: "Selection of fine cheeses", me: "Izbor finih sireva" }, price: 15.5, priceLabel: "€15.5", weight: "250 gr" },
      { id: makeId(), name: { en: "Tuna Carpaccio with Truffles", me: "Karpačo od tune sa tartufima" }, description: { en: "Thinly sliced tuna with truffles", me: "Tanko rezana tuna sa tartufima" }, price: 18.5, priceLabel: "€18.5", weight: "150 gr" },
      { id: makeId(), name: { en: "Burrata", me: "Burrata" }, description: { en: "Creamy Italian burrata", me: "Kremasta italijanska burrata" }, price: 13.5, priceLabel: "€13.5", weight: "150 gr" },
      { id: makeId(), name: { en: "Oysters (per piece)", me: "Kamenice (komad)" }, description: { en: "Fresh oysters", me: "Svježe kamenice" }, price: 6.2, priceLabel: "€6.2" },
      { id: makeId(), name: { en: "Cold Fish Platter for Two", me: "Hladni riblje plato za dvoje" }, description: { en: "Shrimp tartare, tuna tartare, fish pate, tuna carpaccio, salted fish, seafood salad", me: "Tartar od škampi, tartar od tune, riblja pašteta, karpačo od tune, slana riba, salata od morskih plodova" }, price: 43, priceLabel: "€43", weight: "400 gr" },
    ],
  },
  {
    category: { en: "Hot Appetizers", me: "Topla predjela" },
    items: [
      { id: makeId(), name: { en: "Vegetable Spring Rolls", me: "Prolećne rolnice sa povrćem" }, description: { en: "Crispy vegetable spring rolls", me: "Hrskave prolećne rolnice sa povrćem" }, price: 11.5, priceLabel: "€11.5", weight: "150 gr" },
      { id: makeId(), name: { en: "Bruschette Cattaro", me: "Bruškete Cattaro" }, description: { en: "Toasted bread Cattaro style", me: "Tostiran hljeb na način Cattaro" }, price: 13, priceLabel: "€13", weight: "150 gr" },
      { id: makeId(), name: { en: "Bruschette Mediterraneo", me: "Bruškete Mediterraneo" }, description: { en: "Mediterranean style bruschetta", me: "Bruškete na mediteranski način" }, price: 11, priceLabel: "€11", weight: "150 gr" },
      { id: makeId(), name: { en: "Fried Camembert Cheese", me: "Prženi kamembert sir" }, description: { en: "Golden fried camembert", me: "Zlatno prženi kamembert" }, price: 16.5, priceLabel: "€16.5", weight: "200 gr" },
      { id: makeId(), name: { en: "Homemade Pasta with Seafood", me: "Domaća tjestenina sa morskim plodovima" }, description: { en: "Fresh homemade pasta with mixed seafood", me: "Svježa domaća tjestenina sa mješovitim morskim plodovima" }, price: 19.5, priceLabel: "€19.5", weight: "250 gr" },
      { id: makeId(), name: { en: "Homemade Pasta with Shrimps", me: "Domaća tjestenina sa škampima" }, description: { en: "Fresh homemade pasta with shrimps", me: "Svježa domaća tjestenina sa škampima" }, price: 21, priceLabel: "€21", weight: "250 gr" },
      { id: makeId(), name: { en: "Homemade Pasta in Pesto Sauce", me: "Domaća tjestenina u pesto umaku" }, description: { en: "With rosemary, hazelnuts, asparagus and goat cheese", me: "Sa ružmarinom, lješnicima, šparogama i kozjim sirom" }, price: 20, priceLabel: "€20", weight: "250 gr" },
      { id: makeId(), name: { en: "Linguini with Black Truffles", me: "Linguini sa crnim tartufima" }, description: { en: "Linguini with black truffles and parmesan", me: "Linguini sa crnim tartufima i parmezanom" }, price: 19, priceLabel: "€19", weight: "250 gr" },
      { id: makeId(), name: { en: "Seafood Risotto", me: "Rižoto sa morskim plodovima" }, description: { en: "Creamy risotto with mixed seafood", me: "Kremasti rižoto sa mješovitim morskim plodovima" }, price: 20, priceLabel: "€20", weight: "250 gr" },
      { id: makeId(), name: { en: "Black Risotto", me: "Crni rižoto" }, description: { en: "Cuttlefish ink risotto", me: "Rižoto sa mastilom sipe" }, price: 18, priceLabel: "€18", weight: "250 gr" },
      { id: makeId(), name: { en: "Shrimp Tempura", me: "Tempura od škampi" }, description: { en: "Lightly battered shrimp tempura", me: "Lagano pohovana tempura od škampi" }, price: 21, priceLabel: "€21", weight: "200 gr" },
    ],
  },
  {
    category: { en: "Thick Soups", me: "Guste supe" },
    items: [
      { id: makeId(), name: { en: "Fish Soup", me: "Riblja čorba" }, description: { en: "Rich fish soup", me: "Bogata riblja čorba" }, price: 6.5, priceLabel: "€6.5", weight: "250 gr" },
      { id: makeId(), name: { en: "Tomato Soup", me: "Paradajz čorba" }, description: { en: "Creamy tomato soup", me: "Kremasta paradajz čorba" }, price: 5.5, priceLabel: "€5.5", weight: "250 gr" },
      { id: makeId(), name: { en: "Veal Soup", me: "Teleća čorba" }, description: { en: "Hearty veal soup", me: "Izdašna teleća čorba" }, price: 6.5, priceLabel: "€6.5", weight: "250 gr" },
    ],
  },
  {
    category: { en: "Fish", me: "Riba" },
    items: [
      { id: makeId(), name: { en: "Fish 1st Category", me: "Riba I kategorija" }, description: { en: "Premium grilled fish", me: "Premium grilovana riba" }, price: 69, priceLabel: "€69", weight: "1000 gr" },
      { id: makeId(), name: { en: "Grilled Squids", me: "Grilovane lignje" }, description: { en: "Tender grilled squids", me: "Nježne grilovane lignje" }, price: 19, priceLabel: "€19", weight: "300 gr" },
      { id: makeId(), name: { en: "Fried Squids", me: "Pržene lignje" }, description: { en: "Golden fried squids", me: "Zlatno pržene lignje" }, price: 19, priceLabel: "€19", weight: "300 gr" },
      { id: makeId(), name: { en: "Grilled Shrimps", me: "Grilovani škampi" }, description: { en: "Grilled shrimps", me: "Grilovani škampi" }, price: 23, priceLabel: "€23", weight: "250 gr" },
      { id: makeId(), name: { en: "Seabass & Seabream Fillets", me: "Fileti brancina i orade" }, description: { en: "With grilled vegetables", me: "Sa grilovanim povrćem" }, price: 23.5, priceLabel: "€23.5", weight: "250 gr" },
      { id: makeId(), name: { en: "Saint Pierre Fillets", me: "Fileti Sent Pjera" }, description: { en: "With polenta and truffle oil", me: "Sa palentom i uljem od tartufa" }, price: 23.5, priceLabel: "€23.5", weight: "300 gr" },
      { id: makeId(), name: { en: "Salmon Fillets", me: "Fileti lososa" }, description: { en: "With dalmatian stewed vegetables", me: "Sa dalmatinskim dinstenim povrćem" }, price: 22.5, priceLabel: "€22.5", weight: "300 gr" },
      { id: makeId(), name: { en: "Grilled Octopus à la Fisherman", me: "Grilovana hobotnica na riblji način" }, description: { en: "Grilled octopus fisherman style", me: "Grilovana hobotnica na riblji način" }, price: 29, priceLabel: "€29", weight: "270 gr" },
      { id: makeId(), name: { en: "Tuna Steak", me: "Tuna stek" }, description: { en: "With arugula and avocado mousse", me: "Sa rukolom i musom od avokada" }, price: 25, priceLabel: "€25", weight: "250 gr" },
      { id: makeId(), name: { en: "Fish Platter for Two", me: "Riblje plato za dvoje" }, description: { en: "Gilt head & sea bass fillets, shrimps, squids, salmon, black risotto", me: "Fileti orade i brancina, škampi, lignje, losos, crni rižoto" }, price: 63, priceLabel: "€63", weight: "700 gr" },
    ],
  },
  {
    category: { en: "Meat", me: "Meso" },
    items: [
      { id: makeId(), name: { en: "Slowly Cooked Lamb", me: "Polako kuvana jagnjetina" }, description: { en: "With mediterranean couscous", me: "Sa mediteranskim kuskusom" }, price: 21.9, priceLabel: "€21.9", weight: "250 gr" },
      { id: makeId(), name: { en: "Stewed Veal", me: "Dinstano teletina" }, description: { en: "On cauliflower cream with truffles", me: "Na kremu od karfiola sa tartufima" }, price: 23, priceLabel: "€23", weight: "300 gr" },
      { id: makeId(), name: { en: "Beef Steak Portun", me: "Biftek Portun" }, description: { en: "Premium beef steak Portun style", me: "Premium biftek na način Portun" }, price: 27, priceLabel: "€27", weight: "300 gr" },
      { id: makeId(), name: { en: "Sweet and Sour Chicken", me: "Slatko-kisela piletina" }, description: { en: "With pineapple", me: "Sa ananasom" }, price: 20, priceLabel: "€20", weight: "300 gr" },
    ],
  },
  {
    category: { en: "Salads", me: "Salate" },
    items: [
      { id: makeId(), name: { en: "Mixed Salad", me: "Mješana salata" }, description: { en: "Fresh mixed salad", me: "Svježa mješana salata" }, price: 5, priceLabel: "€5", weight: "250 gr" },
      { id: makeId(), name: { en: "Arugula Salad", me: "Salata od rukole" }, description: { en: "Fresh arugula salad", me: "Svježa salata od rukole" }, price: 6, priceLabel: "€6", weight: "200 gr" },
      { id: makeId(), name: { en: "Caprese Salad", me: "Kaprese salata" }, description: { en: "Tomato, mozzarella and basil", me: "Paradajz, mocarela i bosiljak" }, price: 9, priceLabel: "€9", weight: "250 gr" },
    ],
  },
  {
    category: { en: "Desserts", me: "Deserti" },
    items: [
      { id: makeId(), name: { en: "Cake Portun", me: "Torta Portun" }, description: { en: "Signature Portun cake", me: "Firmirana torta Portun" }, price: 6.5, priceLabel: "€6.5", weight: "180 gr" },
      { id: makeId(), name: { en: "Apple Cake", me: "Torta od jabuka" }, description: { en: "Homemade apple cake", me: "Domaća torta od jabuka" }, price: 6.5, priceLabel: "€6.5", weight: "200 gr" },
      { id: makeId(), name: { en: "Ice Cream", me: "Sladoled" }, description: { en: "Selection of ice cream", me: "Izbor sladoleda" }, price: 5, priceLabel: "€5", weight: "250 gr" },
      { id: makeId(), name: { en: "Fig Cake", me: "Torta od smokava" }, description: { en: "Homemade fig cake", me: "Domaća torta od smokava" }, price: 6.5, priceLabel: "€6.5", weight: "200 gr" },
      { id: makeId(), name: { en: "Peach Flambé", me: "Flambirane breskve" }, description: { en: "Peach flambé with vanilla ice cream", me: "Flambirane breskve sa sladoledom od vanile" }, price: 7.5, priceLabel: "€7.5", weight: "250 gr" },
    ],
  },
];

export const wineMenu: MenuCategory[] = [
  {
    category: { en: "White Wine", me: "Bijelo vino" },
    items: [
      { id: makeId(), name: { en: "Krstač - Plantaže", me: "Krstač - Plantaže" }, description: { en: "Montenegro • 0.75 l", me: "Crna Gora • 0.75 l" }, price: 20, priceLabel: "€20" },
      { id: makeId(), name: { en: "Chardonnay - Plantaže", me: "Chardonnay - Plantaže" }, description: { en: "Montenegro • 0.75 l", me: "Crna Gora • 0.75 l" }, price: 20, priceLabel: "€20" },
      { id: makeId(), name: { en: "Chardonnay Zenta - Vučinić", me: "Chardonnay Zenta - Vučinić" }, description: { en: "Montenegro • 0.75 l", me: "Crna Gora • 0.75 l" }, price: 30, priceLabel: "€30" },
      { id: makeId(), name: { en: "Chardonnay Arhonto - Krgović", me: "Chardonnay Arhonto - Krgović" }, description: { en: "Montenegro • 0.75 l", me: "Crna Gora • 0.75 l" }, price: 32, priceLabel: "€32" },
      { id: makeId(), name: { en: "Chardonnay Dry - Radević", me: "Chardonnay Dry - Radević" }, description: { en: "Montenegro • 0.75 l", me: "Crna Gora • 0.75 l" }, price: 50, priceLabel: "€50" },
      { id: makeId(), name: { en: "Trijumf Sauvignon - Aleksandrović", me: "Trijumf Sauvignon - Aleksandrović" }, description: { en: "Serbia • 0.125 l / 0.75 l", me: "Srbija • 0.125 l / 0.75 l" }, price: 35, priceLabel: "€7 / €35" },
      { id: makeId(), name: { en: "Tamjanika - Spasić", me: "Tamjanika - Spasić" }, description: { en: "Serbia • 0.75 l", me: "Srbija • 0.75 l" }, price: 33, priceLabel: "€33" },
      { id: makeId(), name: { en: "Chardonnay - Kovačević", me: "Chardonnay - Kovačević" }, description: { en: "Serbia • 0.75 l", me: "Srbija • 0.75 l" }, price: 33, priceLabel: "€33" },
      { id: makeId(), name: { en: "Malvazija - Meneghetti", me: "Malvazija - Meneghetti" }, description: { en: "Croatia • 0.75 l", me: "Hrvatska • 0.75 l" }, price: 37, priceLabel: "€37" },
      { id: makeId(), name: { en: "Pošip - Volarević", me: "Pošip - Volarević" }, description: { en: "Croatia • 0.75 l", me: "Hrvatska • 0.75 l" }, price: 37, priceLabel: "€37" },
      { id: makeId(), name: { en: "Mâcon-Lugny Chardonnay - Louis Latour", me: "Mâcon-Lugny Chardonnay - Louis Latour" }, description: { en: "France • 0.75 l", me: "Francuska • 0.75 l" }, price: 38, priceLabel: "€38" },
      { id: makeId(), name: { en: "Chablis Chardonnay - William Fevre", me: "Chablis Chardonnay - William Fevre" }, description: { en: "France • 0.75 l", me: "Francuska • 0.75 l" }, price: 54, priceLabel: "€54" },
      { id: makeId(), name: { en: "Pinot Grigio - Serenissima", me: "Pinot Grigio - Serenissima" }, description: { en: "Italy • 0.125 l / 0.75 l", me: "Italija • 0.125 l / 0.75 l" }, price: 39, priceLabel: "€7 / €39" },
      { id: makeId(), name: { en: "Gavi di Gavi - Villa Sparina", me: "Gavi di Gavi - Villa Sparina" }, description: { en: "Italy • 0.75 l", me: "Italija • 0.75 l" }, price: 39, priceLabel: "€39" },
      { id: makeId(), name: { en: "Lugana Molin - Cà Maiol", me: "Lugana Molin - Cà Maiol" }, description: { en: "Italy • 0.75 l", me: "Italija • 0.75 l" }, price: 44, priceLabel: "€44" },
      { id: makeId(), name: { en: "Chardonnay - Jermann", me: "Chardonnay - Jermann" }, description: { en: "Italy • 0.75 l", me: "Italija • 0.75 l" }, price: 49, priceLabel: "€49" },
    ],
  },
  {
    category: { en: "Rosé Wine", me: "Roze vino" },
    items: [
      { id: makeId(), name: { en: "Trijumf Rosé - Aleksandrović", me: "Trijumf Rosé - Aleksandrović" }, description: { en: "0.125 l / 0.75 l", me: "0.125 l / 0.75 l" }, price: 30, priceLabel: "€6 / €30" },
      { id: makeId(), name: { en: "Rosé - Plantaže", me: "Rosé - Plantaže" }, description: { en: "Montenegro • 0.75 l", me: "Crna Gora • 0.75 l" }, price: 20, priceLabel: "€20" },
      { id: makeId(), name: { en: "Rosé - Minuty", me: "Rosé - Minuty" }, description: { en: "France • 0.75 l", me: "Francuska • 0.75 l" }, price: 36, priceLabel: "€36" },
      { id: makeId(), name: { en: "Rosé - Marie Christine", me: "Rosé - Marie Christine" }, description: { en: "France • 0.75 l", me: "Francuska • 0.75 l" }, price: 38, priceLabel: "€38" },
    ],
  },
  {
    category: { en: "Red Wine", me: "Crveno vino" },
    items: [
      { id: makeId(), name: { en: "Vranac - Plantaže", me: "Vranac - Plantaže" }, description: { en: "Montenegro • 0.75 l", me: "Crna Gora • 0.75 l" }, price: 20, priceLabel: "€20" },
      { id: makeId(), name: { en: "Cabernet - Plantaže", me: "Cabernet - Plantaže" }, description: { en: "Montenegro • 0.75 l", me: "Crna Gora • 0.75 l" }, price: 20, priceLabel: "€20" },
      { id: makeId(), name: { en: "Cabernet Sauvignon Arhonto - Krgović", me: "Cabernet Sauvignon Arhonto - Krgović" }, description: { en: "Montenegro • 0.75 l", me: "Crna Gora • 0.75 l" }, price: 34, priceLabel: "€34" },
      { id: makeId(), name: { en: "Vranac Arhonto - Krgović", me: "Vranac Arhonto - Krgović" }, description: { en: "Montenegro • 0.75 l", me: "Crna Gora • 0.75 l" }, price: 38, priceLabel: "€38" },
      { id: makeId(), name: { en: "Syrah - Radević", me: "Syrah - Radević" }, description: { en: "Montenegro • 0.75 l", me: "Crna Gora • 0.75 l" }, price: 56, priceLabel: "€56" },
      { id: makeId(), name: { en: "Regent-Reserve Merlo - Aleksandrović", me: "Regent-Reserve Merlo - Aleksandrović" }, description: { en: "Serbia • 0.125 l / 0.75 l", me: "Srbija • 0.125 l / 0.75 l" }, price: 38, priceLabel: "€7 / €38" },
      { id: makeId(), name: { en: "Prokupac - Virtus", me: "Prokupac - Virtus" }, description: { en: "Serbia • 0.75 l", me: "Srbija • 0.75 l" }, price: 32, priceLabel: "€32" },
      { id: makeId(), name: { en: "Cabernet Sauvignon - Radovanović", me: "Cabernet Sauvignon - Radovanović" }, description: { en: "Serbia • 0.75 l", me: "Srbija • 0.75 l" }, price: 38, priceLabel: "€38" },
      { id: makeId(), name: { en: "Pinot Noir - Virtus", me: "Pinot Noir - Virtus" }, description: { en: "Serbia • 0.75 l", me: "Srbija • 0.75 l" }, price: 44, priceLabel: "€44" },
      { id: makeId(), name: { en: "Dingač - Matuško", me: "Dingač - Matuško" }, description: { en: "Croatia • 0.75 l", me: "Hrvatska • 0.75 l" }, price: 56, priceLabel: "€56" },
      { id: makeId(), name: { en: "Primitivo - San Marzano", me: "Primitivo - San Marzano" }, description: { en: "Italy • 0.75 l", me: "Italija • 0.75 l" }, price: 28, priceLabel: "€28" },
      { id: makeId(), name: { en: "Villa Antinori Rosso", me: "Villa Antinori Rosso" }, description: { en: "Italy • Sangiovese • 0.75 l", me: "Italija • Sangiovese • 0.75 l" }, price: 34, priceLabel: "€34" },
      { id: makeId(), name: { en: "Chianti Classico Reserva - Villa Antinori", me: "Chianti Classico Reserva - Villa Antinori" }, description: { en: "Italy • 0.75 l", me: "Italija • 0.75 l" }, price: 36, priceLabel: "€36" },
      { id: makeId(), name: { en: "Hebo - Petra", me: "Hebo - Petra" }, description: { en: "Italy • 0.75 l", me: "Italija • 0.75 l" }, price: 48, priceLabel: "€48" },
      { id: makeId(), name: { en: "Amarone Classico - Monte Del Fra", me: "Amarone Classico - Monte Del Fra" }, description: { en: "Italy • 0.75 l", me: "Italija • 0.75 l" }, price: 76, priceLabel: "€76" },
      { id: makeId(), name: { en: "Brunello di Montalcino", me: "Brunello di Montalcino" }, description: { en: "Italy • 0.75 l", me: "Italija • 0.75 l" }, price: 140, priceLabel: "€140" },
    ],
  },
  {
    category: { en: "Champagne & Sparkling", me: "Šampanjac i pjenušac" },
    items: [
      { id: makeId(), name: { en: "Prosecco Borgo Molino", me: "Prosecco Borgo Molino" }, description: { en: "0.2 l / 0.75 l", me: "0.2 l / 0.75 l" }, price: 34, priceLabel: "€9 / €34" },
      { id: makeId(), name: { en: "Prosecco Rosé Borgo Molino", me: "Prosecco Rosé Borgo Molino" }, description: { en: "0.2 l / 0.75 l", me: "0.2 l / 0.75 l" }, price: 36, priceLabel: "€10 / €36" },
      { id: makeId(), name: { en: "Prosecco Le Contesse", me: "Prosecco Le Contesse" }, description: { en: "0.75 l", me: "0.75 l" }, price: 30, priceLabel: "€30" },
      { id: makeId(), name: { en: "Brut Imperial NV - Moët & Chandon", me: "Brut Imperial NV - Moët & Chandon" }, description: { en: "0.75 l", me: "0.75 l" }, price: 140, priceLabel: "€140" },
    ],
  },
  {
    category: { en: "Porto & Dessert Wine", me: "Porto i desertno vino" },
    items: [
      { id: makeId(), name: { en: "Porto Valdoro", me: "Porto Valdoro" }, description: { en: "0.1 l / 0.75 l", me: "0.1 l / 0.75 l" }, price: 30, priceLabel: "€5 / €30" },
    ],
  },
];

export const drinksMenu: MenuCategory[] = [
  {
    category: { en: "Hot Beverages", me: "Topli napici" },
    items: [
      { id: makeId(), name: { en: "Cappuccino", me: "Kapućino" }, description: { en: "Classic cappuccino", me: "Klasični kapućino" }, price: 2.5, priceLabel: "€2.5" },
      { id: makeId(), name: { en: "Caffe Latte", me: "Kafe Late" }, description: { en: "Smooth caffe latte", me: "Kremasti kafe late" }, price: 2.7, priceLabel: "€2.7" },
      { id: makeId(), name: { en: "Hot Chocolate", me: "Topla čokolada" }, description: { en: "Rich hot chocolate", me: "Bogata topla čokolada" }, price: 3.4, priceLabel: "€3.4" },
      { id: makeId(), name: { en: "Tea", me: "Čaj" }, description: { en: "Selection of teas", me: "Izbor čajeva" }, price: 2.7, priceLabel: "€2.7" },
      { id: makeId(), name: { en: "Espresso with Milk", me: "Espreso sa mlijekom" }, description: { en: "Espresso with steamed milk", me: "Espreso sa toplim mlijekom" }, price: 2.3, priceLabel: "€2.3" },
      { id: makeId(), name: { en: "Espresso", me: "Espreso" }, description: { en: "Classic espresso", me: "Klasični espreso" }, price: 2, priceLabel: "€2" },
      { id: makeId(), name: { en: "Nescafe", me: "Nescafe" }, description: { en: "Nescafe coffee", me: "Nescafe kafa" }, price: 2.7, priceLabel: "€2.7" },
      { id: makeId(), name: { en: "Americano", me: "Americano" }, description: { en: "Classic americano", me: "Klasični americano" }, price: 2.3, priceLabel: "€2.3" },
      { id: makeId(), name: { en: "Ice Coffee", me: "Ledena kafa" }, description: { en: "Chilled ice coffee", me: "Hladna ledena kafa" }, price: 3.9, priceLabel: "€3.9" },
      { id: makeId(), name: { en: "Irish Coffee", me: "Irska kafa" }, description: { en: "Coffee with whiskey and cream", me: "Kafa sa viskijem i kremom" }, price: 5.6, priceLabel: "€5.6" },
    ],
  },
  {
    category: { en: "Mineral Water", me: "Mineralna voda" },
    items: [
      { id: makeId(), name: { en: "Still Water 0.25 l", me: "Negazirana voda 0.25 l" }, description: { en: "0.25 l", me: "0.25 l" }, price: 2.2, priceLabel: "€2.2" },
      { id: makeId(), name: { en: "Still Water 0.75 l", me: "Negazirana voda 0.75 l" }, description: { en: "0.75 l", me: "0.75 l" }, price: 4.2, priceLabel: "€4.2" },
      { id: makeId(), name: { en: "Sparkling Water 0.25 l", me: "Gazirana voda 0.25 l" }, description: { en: "0.25 l", me: "0.25 l" }, price: 2.2, priceLabel: "€2.2" },
      { id: makeId(), name: { en: "Sparkling Water 0.75 l", me: "Gazirana voda 0.75 l" }, description: { en: "0.75 l", me: "0.75 l" }, price: 4.2, priceLabel: "€4.2" },
    ],
  },
  {
    category: { en: "Non-Alcoholic", me: "Bezalkoholna pića" },
    items: [
      { id: makeId(), name: { en: "Juices", me: "Sokovi" }, description: { en: "0.2 l", me: "0.2 l" }, price: 3, priceLabel: "€3" },
      { id: makeId(), name: { en: "Thomas Henry", me: "Thomas Henry" }, description: { en: "0.2 l", me: "0.2 l" }, price: 5, priceLabel: "€5" },
      { id: makeId(), name: { en: "Fanta", me: "Fanta" }, description: { en: "0.25 l", me: "0.25 l" }, price: 3, priceLabel: "€3" },
      { id: makeId(), name: { en: "Lemonade", me: "Limunada" }, description: { en: "0.3 l", me: "0.3 l" }, price: 3.2, priceLabel: "€3.2" },
      { id: makeId(), name: { en: "Fresh Orange Juice", me: "Svježi sok od narandže" }, description: { en: "0.3 l", me: "0.3 l" }, price: 3.9, priceLabel: "€3.9" },
      { id: makeId(), name: { en: "Coca-Cola", me: "Coca-Cola" }, description: { en: "0.25 l", me: "0.25 l" }, price: 3, priceLabel: "€3" },
      { id: makeId(), name: { en: "Sprite", me: "Sprite" }, description: { en: "0.25 l", me: "0.25 l" }, price: 3, priceLabel: "€3" },
      { id: makeId(), name: { en: "Bitter Lemon", me: "Bitter Lemon" }, description: { en: "0.25 l", me: "0.25 l" }, price: 3, priceLabel: "€3" },
      { id: makeId(), name: { en: "Tonic", me: "Tonik" }, description: { en: "0.25 l", me: "0.25 l" }, price: 3, priceLabel: "€3" },
      { id: makeId(), name: { en: "Homemade Ice Tea", me: "Domaći ledeni čaj" }, description: { en: "0.3 l", me: "0.3 l" }, price: 3.5, priceLabel: "€3.5" },
      { id: makeId(), name: { en: "Cedevita", me: "Cedevita" }, description: { en: "0.33 l", me: "0.33 l" }, price: 3.3, priceLabel: "€3.3" },
      { id: makeId(), name: { en: "Red Bull", me: "Red Bull" }, description: { en: "0.25 l", me: "0.25 l" }, price: 4.5, priceLabel: "€4.5" },
      { id: makeId(), name: { en: "Fresh Cold-Pressed Juices", me: "Svježi hladno cijeđeni sokovi" }, description: { en: "0.3 l", me: "0.3 l" }, price: 3.8, priceLabel: "€3.8" },
    ],
  },
  {
    category: { en: "Cider", me: "Cider" },
    items: [
      { id: makeId(), name: { en: "Somersby", me: "Somersby" }, description: { en: "Apple cider", me: "Cider od jabuke" }, price: 3.8, priceLabel: "€3.8" },
    ],
  },
  {
    category: { en: "Beer", me: "Pivo" },
    items: [
      { id: makeId(), name: { en: "Nik", me: "Nik" }, description: { en: "0.33 l", me: "0.33 l" }, price: 3.5, priceLabel: "€3.5" },
      { id: makeId(), name: { en: "Kronenbourg Blanc", me: "Kronenbourg Blanc" }, description: { en: "0.33 l", me: "0.33 l" }, price: 3.9, priceLabel: "€3.9" },
      { id: makeId(), name: { en: "Budweiser", me: "Budweiser" }, description: { en: "0.33 l", me: "0.33 l" }, price: 3.9, priceLabel: "€3.9" },
      { id: makeId(), name: { en: "Erdinger", me: "Erdinger" }, description: { en: "0.33 l", me: "0.33 l" }, price: 4.1, priceLabel: "€4.1" },
      { id: makeId(), name: { en: "Heineken", me: "Heineken" }, description: { en: "0.25 l", me: "0.25 l" }, price: 3.9, priceLabel: "€3.9" },
      { id: makeId(), name: { en: "Budweiser Dark", me: "Budweiser Dark" }, description: { en: "0.33 l", me: "0.33 l" }, price: 3.9, priceLabel: "€3.9" },
    ],
  },
  {
    category: { en: "Cocktails", me: "Kokteli" },
    items: [
      { id: makeId(), name: { en: "Aperol Spritz", me: "Aperol Spritz" }, description: { en: "Classic Aperol spritz", me: "Klasični Aperol spritz" }, price: 8, priceLabel: "€8" },
      { id: makeId(), name: { en: "Hugo Spritz", me: "Hugo Spritz" }, description: { en: "Elderflower spritz", me: "Spritz od bazge" }, price: 8, priceLabel: "€8" },
      { id: makeId(), name: { en: "Limoncello Spritz", me: "Limoncello Spritz" }, description: { en: "Lemon liqueur spritz", me: "Spritz od limoncella" }, price: 8, priceLabel: "€8" },
      { id: makeId(), name: { en: "Long Island", me: "Long Island" }, description: { en: "Long Island iced tea", me: "Long Island ledeni čaj" }, price: 12, priceLabel: "€12" },
      { id: makeId(), name: { en: "Apple Jack", me: "Apple Jack" }, description: { en: "Apple cocktail", me: "Koktel od jabuke" }, price: 9, priceLabel: "€9" },
      { id: makeId(), name: { en: "Cocktail Portun", me: "Koktel Portun" }, description: { en: "House signature cocktail", me: "Firminski koktel" }, price: 14, priceLabel: "€14" },
      { id: makeId(), name: { en: "Moscow Mule", me: "Moscow Mule" }, description: { en: "Vodka, ginger beer, lime", me: "Votka, đumbir pivo, limeta" }, price: 10, priceLabel: "€10" },
      { id: makeId(), name: { en: "Bellini Portun", me: "Bellini Portun" }, description: { en: "Prosecco and peach", me: "Prosecco i breskva" }, price: 8, priceLabel: "€8" },
      { id: makeId(), name: { en: "Mojito", me: "Mojito" }, description: { en: "Classic mojito", me: "Klasični mojito" }, price: 9, priceLabel: "€9" },
      { id: makeId(), name: { en: "Margarita", me: "Margarita" }, description: { en: "Classic margarita", me: "Klasična margarita" }, price: 9, priceLabel: "€9" },
      { id: makeId(), name: { en: "Virgin Mojito", me: "Bezalkoholni Mojito" }, description: { en: "Non-alcoholic mojito", me: "Bezalkoholni mojito" }, price: 8, priceLabel: "€8" },
      { id: makeId(), name: { en: "Virgin Portun", me: "Bezalkoholni Portun" }, description: { en: "Non-alcoholic house cocktail", me: "Bezalkoholni firminski koktel" }, price: 8, priceLabel: "€8" },
      { id: makeId(), name: { en: "Negroni", me: "Negroni" }, description: { en: "Classic negroni", me: "Klasični negroni" }, price: 10, priceLabel: "€10" },
    ],
  },
  {
    category: { en: "Whiskey", me: "Viski" },
    items: [
      { id: makeId(), name: { en: "Johnnie Walker Red Label", me: "Johnnie Walker Red Label" }, description: { en: "0.03 l", me: "0.03 l" }, price: 3.5, priceLabel: "€3.5" },
      { id: makeId(), name: { en: "Jameson", me: "Jameson" }, description: { en: "0.03 l", me: "0.03 l" }, price: 3.8, priceLabel: "€3.8" },
      { id: makeId(), name: { en: "Four Roses Bourbon", me: "Four Roses Bourbon" }, description: { en: "0.03 l", me: "0.03 l" }, price: 4.4, priceLabel: "€4.4" },
      { id: makeId(), name: { en: "Jack Daniel's", me: "Jack Daniel's" }, description: { en: "0.03 l", me: "0.03 l" }, price: 4.2, priceLabel: "€4.2" },
      { id: makeId(), name: { en: "Johnnie Walker Black Label", me: "Johnnie Walker Black Label" }, description: { en: "0.03 l", me: "0.03 l" }, price: 4.4, priceLabel: "€4.4" },
      { id: makeId(), name: { en: "Chivas Regal", me: "Chivas Regal" }, description: { en: "0.03 l", me: "0.03 l" }, price: 5.2, priceLabel: "€5.2" },
      { id: makeId(), name: { en: "Glenfiddich 12yo", me: "Glenfiddich 12yo" }, description: { en: "0.03 l", me: "0.03 l" }, price: 6, priceLabel: "€6" },
      { id: makeId(), name: { en: "Nikka", me: "Nikka" }, description: { en: "0.03 l", me: "0.03 l" }, price: 12, priceLabel: "€12" },
    ],
  },
  {
    category: { en: "Liqueur", me: "Liker" },
    items: [
      { id: makeId(), name: { en: "Baileys", me: "Baileys" }, description: { en: "0.03 l", me: "0.03 l" }, price: 3.2, priceLabel: "€3.2" },
      { id: makeId(), name: { en: "Aperol", me: "Aperol" }, description: { en: "0.03 l", me: "0.03 l" }, price: 3.2, priceLabel: "€3.2" },
      { id: makeId(), name: { en: "Limoncello", me: "Limoncello" }, description: { en: "0.03 l", me: "0.03 l" }, price: 3.2, priceLabel: "€3.2" },
    ],
  },
  {
    category: { en: "Aperitifs", me: "Aperitivi" },
    items: [
      { id: makeId(), name: { en: "Pelinkovac Maraska", me: "Pelinkovac Maraska" }, description: { en: "0.03 l", me: "0.03 l" }, price: 2.6, priceLabel: "€2.6" },
      { id: makeId(), name: { en: "Jägermeister", me: "Jägermeister" }, description: { en: "0.03 l", me: "0.03 l" }, price: 3.3, priceLabel: "€3.3" },
      { id: makeId(), name: { en: "Amaro Montenegro / Ramazzotti", me: "Amaro Montenegro / Ramazzotti" }, description: { en: "0.03 l", me: "0.03 l" }, price: 3.2, priceLabel: "€3.2" },
      { id: makeId(), name: { en: "Martini Bianco / Rosso", me: "Martini Bianco / Rosso" }, description: { en: "0.05 l", me: "0.05 l" }, price: 3.2, priceLabel: "€3.2" },
      { id: makeId(), name: { en: "Campari", me: "Campari" }, description: { en: "0.03 l", me: "0.03 l" }, price: 3.2, priceLabel: "€3.2" },
    ],
  },
  {
    category: { en: "Gin", me: "Džin" },
    items: [
      { id: makeId(), name: { en: "Gin Gordon's", me: "Gin Gordon's" }, description: { en: "0.03 l", me: "0.03 l" }, price: 3.4, priceLabel: "€3.4" },
      { id: makeId(), name: { en: "Bombay Sapphire", me: "Bombay Sapphire" }, description: { en: "0.03 l", me: "0.03 l" }, price: 4.4, priceLabel: "€4.4" },
      { id: makeId(), name: { en: "Hendrick's Gin", me: "Hendrick's Gin" }, description: { en: "0.03 l", me: "0.03 l" }, price: 5, priceLabel: "€5" },
    ],
  },
  {
    category: { en: "Tequila & Vodka", me: "Tekila i Votka" },
    items: [
      { id: makeId(), name: { en: "Two Fingers", me: "Two Fingers" }, description: { en: "0.03 l", me: "0.03 l" }, price: 3.4, priceLabel: "€3.4" },
      { id: makeId(), name: { en: "Vodka Absolut", me: "Vodka Absolut" }, description: { en: "0.03 l", me: "0.03 l" }, price: 3.4, priceLabel: "€3.4" },
      { id: makeId(), name: { en: "Beluga", me: "Beluga" }, description: { en: "0.03 l", me: "0.03 l" }, price: 6.6, priceLabel: "€6.6" },
    ],
  },
  {
    category: { en: "Cognac", me: "Konjak" },
    items: [
      { id: makeId(), name: { en: "Martell V.S.", me: "Martell V.S." }, description: { en: "0.03 l", me: "0.03 l" }, price: 5.5, priceLabel: "€5.5" },
      { id: makeId(), name: { en: "Martell V.S.O.P.", me: "Martell V.S.O.P." }, description: { en: "0.03 l", me: "0.03 l" }, price: 8, priceLabel: "€8" },
      { id: makeId(), name: { en: "Hennessy XO", me: "Hennessy XO" }, description: { en: "0.03 l", me: "0.03 l" }, price: 24, priceLabel: "€24" },
    ],
  },
  {
    category: { en: "Brandy", me: "Rakija" },
    items: [
      { id: makeId(), name: { en: "Loza Kruna (Grapes)", me: "Loza Kruna" }, description: { en: "0.03 l", me: "0.03 l" }, price: 3, priceLabel: "€3" },
      { id: makeId(), name: { en: "Meduška (Brandy with Honey)", me: "Meduška" }, description: { en: "0.03 l", me: "0.03 l" }, price: 3, priceLabel: "€3" },
      { id: makeId(), name: { en: "Viljamovka (Pear)", me: "Viljamovka" }, description: { en: "0.03 l", me: "0.03 l" }, price: 3.2, priceLabel: "€3.2" },
      { id: makeId(), name: { en: "Quince / Apricot / Plum", me: "Dunja / Kajsija / Šljiva" }, description: { en: "0.03 l", me: "0.03 l" }, price: 3.5, priceLabel: "€3.5" },
      { id: makeId(), name: { en: "Yeni Raki", me: "Yeni Raki" }, description: { en: "0.04 l", me: "0.04 l" }, price: 4.5, priceLabel: "€4.5" },
      { id: makeId(), name: { en: "Grappa di Amarone", me: "Grappa di Amarone" }, description: { en: "0.03 l", me: "0.03 l" }, price: 5.6, priceLabel: "€5.6" },
    ],
  },
  {
    category: { en: "Rum", me: "Rum" },
    items: [
      { id: makeId(), name: { en: "Captain Morgan", me: "Captain Morgan" }, description: { en: "0.03 l", me: "0.03 l" }, price: 3.4, priceLabel: "€3.4" },
      { id: makeId(), name: { en: "Plantation Rum", me: "Plantation Rum" }, description: { en: "0.03 l", me: "0.03 l" }, price: 4.4, priceLabel: "€4.4" },
    ],
  },
];
