tpPokemon

Recherche d’un pokémon via son numéro : cette partie consiste à lier une balise à une variable et l’afficher dans la page html, ensuite stocker et déclarer des variables dans le fichier pokedex.js pour les utiliser par la suite dans pokedex.html grâce à $scope. On peut parcourir une liste de données, et un tableau grâce à ng-repeat et faire un filtre dessus.
Recherche dans une liste : il s’agit de l’utilisation d’une fonction soit avec factory ou bien avec un service ; le principe est le même, c’est juste la syntaxe qui est différente : factory retourne ce que la fonction retourne, tandis qu’avec un service on ne retourne rien (pas de return) car c’est l’objet lui-même qui va être retourné. Le rôle d’un service est similaire à celui d’un modèle, on peut l’utiliser partout dans notre application et dans plusieurs contrôleurs. Pour l’utiliser, il suffit de l’injecter dans la fonction du contrôleur comme un paramètre.
Accès à une API et communication entre contrôleurs : il s’agit de l’utilisation de $watch qui est un service qui permet de mettre à jour l'affichage du pokémon lors du changement du Pokémon recherché. $watch a deux paramètres : Le premier est ce que nous devons observer (dans notre cas c’est le select du multichoix), le deuxième est la fonction exécutée (dans notre cas dès qu’on sélectionne un Pokémon on voit ses informations s’afficher à côté de la liste). 
Nous avons aussi créé une directive de type élément (E) nommée pokedex et nous l’avons appelée dans index.html.


