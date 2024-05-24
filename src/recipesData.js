const recipes = [
    {
      id: 1,
      title: 'Pasta Carbonara',
      description: 'Classic Italian pasta dish with bacon and cheese',
      ingredients: ['200g spaghetti', '100g bacon', '2 eggs', '50g grated Parmesan cheese'],
      steps: ['Cook the spaghetti according to package instructions', 'Fry the bacon in a pan until crispy', 'In a bowl, whisk together the eggs and Parmesan cheese', 'Drain the spaghetti and add it to the pan with the bacon', 'Turn off the heat and mix in the egg mixture until creamy and well-coated', 'Serve with additional Parmesan cheese'],
      imageUrl: 'https://www.allrecipes.com/thmb/a_0W8yk_LLCtH-VPqg2uLD9I5Pk=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg'
    },
    {
      id: 2,
      "title": "Baked Salmon",
  "description": "Flavorful and nutritious baked salmon with a zesty garlic and lemon marinade.",
  "ingredients": [
    "2 salmon fillets",
    "2 tablespoons olive oil",
    "2 cloves garlic, minced",
    "1 lemon, sliced",
    "1 tablespoon chopped fresh parsley",
    "Salt and pepper to taste"
  ],
  "steps": [
    "Preheat the oven to 375°F (190°C).",
    "Place the salmon fillets on a baking sheet lined with parchment paper.",
    "In a small bowl, whisk together olive oil, minced garlic, chopped parsley, salt, and pepper.",
    "Brush the marinade over the salmon fillets.",
    "Arrange lemon slices on top of the salmon.",
    "Bake in the preheated oven for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork.",
    "Serve hot, garnished with additional parsley and lemon slices if desired."
  ],
  "imageUrl": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/1/CN1B01_oven-baked-salmon_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382545141944.jpeg"

    },
    {
      id: 3,
      "title": "Veggie Stir Fry",
      "description": "A quick and healthy stir-fry loaded with colorful vegetables and savory flavors.",
      "ingredients": [
        "1 bell pepper",
        "1 carrot",
        "1 zucchini",
        "1 cup broccoli florets",
        "1/2 cup snow peas",
        "1/4 cup soy sauce",
        "2 cloves garlic",
        "1 teaspoon ginger",
        "2 tablespoons vegetable oil",
        "Cooked rice"
      ],
      "steps": [
        "Heat vegetable oil in a large skillet or wok over medium-high heat.",
        "Add garlic and ginger, and stir-fry for about 30 seconds.",
        "Add bell pepper, carrot, zucchini, broccoli, and snow peas to the skillet.",
        "Stir-fry vegetables until tender-crisp, about 5-7 minutes.",
        "Pour soy sauce over the vegetables and stir to combine.",
        "Serve over cooked rice.",
        "Enjoy!"
      ],
      "imageUrl": "https://playswellwithbutter.com/wp-content/uploads/2022/02/Beef-and-Vegetable-Stir-Fry-16.jpg"
    },
    {
      id: 4,
      "title": "Spaghetti Bolognese",
  "description": "Classic Italian pasta dish with a rich and flavorful meat sauce.",
  "ingredients": [
    "1 lb spaghetti",
    "1 lb ground beef",
    "1 onion, diced",
    "2 cloves garlic, minced",
    "1 can crushed tomatoes",
    "1/4 cup tomato paste",
    "1 teaspoon dried oregano",
    "1/2 teaspoon dried basil",
    "Salt and pepper to taste"
  ],
  "steps": [
    "Cook the spaghetti according to package instructions.",
    "In a large skillet, cook the ground beef over medium heat until browned.",
    "Add diced onion and minced garlic to the skillet, and cook until softened.",
    "Stir in crushed tomatoes, tomato paste, dried oregano, dried basil, salt, and pepper.",
    "Simmer the sauce for 15-20 minutes, stirring occasionally.",
    "Serve the sauce over cooked spaghetti.",
    "Enjoy with grated Parmesan cheese and fresh basil leaves."
  ],
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfqrsXWIkrTBANrPdhQ072PuEcv3hmy6N7mi7oL06kA&s"

    },
    {
      id: 5,
      "title": "Chicken Alfredo",
      "description": "Creamy and indulgent fettuccine Alfredo with tender chicken breast strips.",
      "ingredients": [
        "1 lb fettuccine",
        "2 boneless, skinless chicken breasts",
        "2 cups heavy cream",
        "1 cup grated Parmesan cheese",
        "4 cloves garlic, minced",
        "1/4 cup chopped fresh parsley",
        "Salt and pepper to taste"
      ],
      "steps": [
        "Cook the fettuccine according to package instructions.",
        "Season chicken breasts with salt and pepper.",
        "In a large skillet, heat olive oil over medium-high heat.",
        "Add chicken breasts and cook until golden brown on both sides and no longer pink in the center, about 6-8 minutes per side.",
        "Remove chicken from skillet and set aside.",
        "In the same skillet, add minced garlic and cook until fragrant.",
        "Reduce heat to medium and pour in heavy cream, stirring constantly.",
        "Add grated Parmesan cheese and stir until sauce thickens.",
        "Slice cooked chicken breasts and add them back to the skillet.",
        "Toss cooked fettuccine in the Alfredo sauce until well coated.",
        "Serve hot, garnished with chopped fresh parsley."
      ],
      "imageUrl": "https://cookinginthemidwest.com/wp-content/uploads/2023/08/savingPNG-18.jpg"
    },
    {
      id: 6,
      "title": "Vegetable Soup",
      "description": "Hearty and comforting vegetable soup loaded with nutritious veggies and savory broth.",
      "ingredients": [
        "1 onion, diced",
        "2 carrots, sliced",
        "2 celery stalks, sliced",
        "1 zucchini, diced",
        "1 cup corn kernels",
        "1 can diced tomatoes",
        "6 cups vegetable broth",
        "1 teaspoon dried thyme",
        "Salt and pepper to taste"
      ],
      "steps": [
        "In a large pot, heat olive oil over medium heat.",
        "Add diced onion, sliced carrots, and sliced celery to the pot.",
        "Cook until vegetables are softened, about 5-7 minutes.",
        "Add diced zucchini, corn kernels, diced tomatoes, vegetable broth, and dried thyme to the pot.",
        "Season with salt and pepper to taste.",
        "Bring the soup to a boil, then reduce heat and simmer for 20-25 minutes, or until vegetables are tender.",
        "Serve hot, garnished with fresh herbs if desired."
      ],
      "imageUrl": "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/09/Vegetable-Soup-main.jpg"
    },
    {
      id: 7,
      "title": "Beef Tacos",
      "description": "Classic Mexican tacos made with seasoned ground beef and fresh toppings.",
      "ingredients": [
        "1 lb ground beef",
        "1 packet taco seasoning",
        "8 small tortillas",
        "1 cup shredded lettuce",
        "1 cup diced tomatoes",
        "1/2 cup shredded cheese",
        "1/4 cup diced onions",
        "Salsa",
        "Sour cream"
      ],
      "steps": [
        "In a skillet, cook the ground beef over medium heat until browned.",
        "Add the taco seasoning and water according to package instructions.",
        "Warm the tortillas in a separate skillet or microwave.",
        "Fill each tortilla with a scoop of seasoned beef.",
        "Top with shredded lettuce, diced tomatoes, cheese, onions, salsa, and sour cream.",
        "Serve immediately."
      ],
      "imageUrl": "https://www.thespruceeats.com/thmb/WPBHECpe7U1PFX7DStyGtp9hCKg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Softbeeftacos-GettyImages-614313140-593df4533df78c537b375d6d.jpg"
    },
    {
      id: 8,
      title: 'Grilled Chicken Salad',
      description: 'Healthy and delicious salad with grilled chicken',
      ingredients: [
        '2 boneless, skinless chicken breasts',
        '1 head romaine lettuce',
        '1 cucumber',
        '1 bell pepper',
        '1 cup cherry tomatoes',
        '1/4 cup red onion',
        '1/2 cup feta cheese',
        'Olive oil',
        'Balsamic vinegar',
        'Salt and pepper to taste'
      ],
      steps: [
        'Grill the chicken breasts until cooked through.',
        'Chop the romaine lettuce, cucumber, bell pepper, cherry tomatoes, and red onion.',
        'Slice the grilled chicken breasts.',
        'In a large bowl, combine the chopped vegetables, sliced chicken, and crumbled feta cheese.',
        'Drizzle with olive oil and balsamic vinegar, then season with salt and pepper.',
        'Toss everything together until well coated.',
        'Serve immediately.'
      ],
      imageUrl: 'https://www.eatingwell.com/thmb/g_4THo2JjoiRYTYBxW4StoH48qU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Grilled-chicken-salad-1x1-228-a7f2948441384115bbf5c3f8bcddf053.jpg'
    },
    {
      id: 9,
      "title": "Margherita Pizza",
      "description": "Classic Italian pizza topped with tomato sauce, mozzarella cheese, fresh tomatoes, and basil leaves.",
      "ingredients": [
        "1 pre-made pizza dough",
        "1/2 cup pizza sauce",
        "1 cup shredded mozzarella cheese",
        "2 tomatoes, sliced",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"
      ],
      "steps": [
        "Preheat the oven to the temperature specified on the pizza dough package.",
        "Roll out the pizza dough on a floured surface to your desired thickness.",
        "Transfer the rolled-out dough to a pizza pan or baking sheet lined with parchment paper.",
        "Spread pizza sauce evenly over the dough, leaving a small border around the edges.",
        "Sprinkle shredded mozzarella cheese over the sauce.",
        "Arrange tomato slices on top of the cheese.",
        "Drizzle olive oil over the pizza, then season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes, or until the crust is golden brown and the cheese is bubbly.",
        "Remove from oven and let cool slightly before slicing.",
        "Garnish with fresh basil leaves before serving."
      ],
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9qFywx2LY0nBn7ZwE3ZKuKjoT5xMmezvxlEsNTE77hg&s"
    },
  ];
  export default recipes;