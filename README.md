TP POKEAPI : 

Recherche d�un pok�mon via son num�ro�: cette partie consiste � lier une balise � une variable et l�afficher dans la page html, ensuite stocker et d�clarer des variables dans le fichier pokedex.js pour les utiliser par la suite dans pokedex.html gr�ce � $scope. On peut parcourir une liste de donn�es, et un tableau gr�ce � ng-repeat et faire un filtre dessus.

Recherche dans une liste�: il s�agit de l�utilisation d�une fonction soit avec factory ou bien avec un service ; le principe est le m�me, c�est juste la syntaxe qui est diff�rente : factory retourne ce que la fonction retourne, tandis qu�avec un service on ne retourne rien (pas de return) car c�est l�objet lui-m�me qui va �tre retourn�. Le r�le d�un service est similaire � celui d�un mod�le, on peut l�utiliser partout dans notre application et dans plusieurs contr�leurs. Pour l�utiliser, il suffit de l�injecter dans la fonction du contr�leur comme un param�tre.

Acc�s � une API et communication entre contr�leurs�: il s�agit de l�utilisation de $watch qui est un service qui permet de mettre � jour l'affichage du pok�mon lors du changement du Pok�mon recherch�. $watch a deux param�tres : Le premier est ce que nous devons observer (dans notre cas c�est le select du multichoix), le deuxi�me est la fonction ex�cut�e (dans notre cas d�s qu�on s�lectionne un Pok�mon on voit ses informations s�afficher � c�t� de la liste). 

Nous avons aussi cr�� une directive de type �l�ment (E) nomm�e pokedex et nous l�avons appel�e dans index.html.


