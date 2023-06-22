const fruits = document.querySelectorAll('#s2-image1, #s2-image2, #s2-image3, #s2-image4, #s2-image5, #s2-image6, #s2-image7');

const namePitaya = 'Pitaya';
const textPitaya = 'Pitaya, otherwise known as Dragon fruit, grows in South and Central America as well as in southern Mexico. Pitaya has a mild taste with sweet undertones, reminiscent of kiwi and pear. Dragon fruit is usually pink on the outside with white or vibrant pink flesh and dotted with small black edible seeds throughout.';
const nameRambutan = 'Rambutan';
const textRambutan = 'Rambutan is a tropical fruit that grows in Southeast Asia, Australia, and Hawaii. Rambutan has a red shell and soft, hair-like spikes surrounding the outside of the red shell. It has a sweet taste, slightly astringent, with strawberry notes.';
const nameLychee = 'Lychee';
const textLychee = 'Lychee is a tropical fruit native to Southeast Asia. Lychee has thin, hard, and easily breakable pink skin with white flesh underneath and a large, inedible seed in the middle. It has an aromatic taste, usually described as a cross between a watermelon and a strawberry. Lychee fruit is usually the size of a grape.';
const nameGuava = 'Guava';
const textGuava = 'Guava is a type of tropical fruit that grows in Mexico, Central America, and the Caribbean. The fruit has a thick green-yellow outer skin and a pink or white center. Guava is around the size of an apple, and when fully grown it is very juicy and soft. Guava has a fruity and floral taste with notes of strawberry.';
const nameCarambola = 'Carambola';
const textCarambola = 'Carambola, also called star fruit, is an edible fruit native to tropical Asia and extensively cultivated in tropical areas. The fruit has the shape of a five-point star with yellow or green skin and is often consumed raw or as a juice. Carambola has a slightly sweet and sour taste with a note of melon and pear.';
const namePapaya = 'Papaya';
const textPapaya = 'Papaya is a tasty fruit of a large plant native to Mexico and Central America. It is a large fruit with a green or yellow, thin outer skin. The inside is juicy and soft, salmon color with lots of black, small seeds that are edible but should be eaten in moderation. Papaya has a mild and slightly sweet taste with a creamy texture.';
const nameDurian = 'Durian';
const textDurian = 'Durian is a tropical fruit cultivated in Southeast Asia. The fruit has a hard external shell, covered with stout spines, and contains five oval compartments, each filled with a cream-colored pulp in which are embedded one to five chestnut-sized seeds. Although durian has a mildly sweet aroma, it also has a pungent smell.';

const nameFruits = [nameLychee, namePapaya, nameDurian, nameGuava, nameCarambola, nameRambutan, namePitaya];
const textFruits = [textLychee, textPapaya, textDurian, textGuava, textCarambola, textRambutan, textPitaya];

const nameField = document.querySelector('.nameField');
const textField = document.querySelector('.textField');

if (fruits){

    fruits.forEach( (fruit, index) => {

        fruit.addEventListener('click', () => {

            nameField.textContent = nameFruits[index];
            textField.textContent = textFruits[index];

            nameField.scrollIntoView({ behavior: "smooth"});
        });
    });
}