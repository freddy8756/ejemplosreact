# ejemplosreact
## documentacion de el codigo
### Paso 1: Crea un nuevo visual studio, en el crea una nueva carpeta donde guardaras tu archivo de github
### Paso 2: ya una vez tengas vinculado tu git con la carpeta del visual usa el siguiente comando para ver la version de tu node: node -v
### Paso 3: Tambien puedes ocupar el siguiente comando para ver la version del npm: npm -v
### Paso 4: si no tienes node, consulta la siguiente pagina para instalarlo: https://nodejs.org/es
### Paso 5: ya una vez tengas todo, para instalar tus paquetes y archivos react ocupa el codigo:npm create vite@latest nombre-de-tu-carpeta -- --template react 
### Paso 6: para instalar tu paquete de node_moduls usa el comando: npm install
### Paso 7: Crea la carpeta de src y dentro de ella una de servicies y otra de assets, en la de servicies va tu archivo de api.js para tener la union de otras apis que tengas, en la de assets irias agregando imagenes que vallas agregando en tu documentacion
### Paso 8: una de las apis que consumiras seria la de fakestoriapi, aqui tienes el link para que vallas: https://fakestoreapi.com/docs#tag/Users/operation/getAllUsers
### Paso 9: Dirigite a la pagina de google cloud donde podras crear o obtener un codigo el cual podras pegar en un archivo que crearas llamado .env al nivel de src, en el agregas con: vite_openweater o google maps_api-codigo del google cloud, esto te ayuda a mandar a llamar los mapas o el clima de donde estes
### Paso 10: con el comando: npm i @react-google-maps/api hacer que funcione tus mapas en tu app
### paso 11: con el comando: npm install axios haces que todas tus acciones de axios funcionen correctamente
### paso 12: con el comando: npm run dev ejecutas tu app que te envia un link el cual puedes copiarlo y pegarlo en el google para que te carge la app

## Documentacion de lo que puedes crear en src
### En src tendras las carpetas de assets y servicies, pero tambien puedes crear archivos para tu app, ya sea encabezado, cards, tarjeta, tarjet, usuarios, productos, estos en js para crear sus funciones y otros archivos con el mismo nombre pero en css, recuerda que todos tienen que tener la primer letra de su nombre en mayuscula, ya que el react suele ejecutarlo mal o no lo recibe
### En el archivo App.js es donde mandas a llamar todos tus archivos para acomodarlos en tu pagina en el orden que quieras
### las imagenes que tienes en el assets puedes mandarlas a llamar con './assets/nombre de tu archivo, ejemplo:archivo.jpg o png', suele ocurrir que si no lo agregas como esta tu imagen, te marque un error y creas que el error este en tu codigo
