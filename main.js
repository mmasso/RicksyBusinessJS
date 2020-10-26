/**
 * Ricksy Business
 * ===============
 * Rick se queda a cargo Morty y Summer, 
 * y celebra una pedazo de fiesta. 
 * Entre los invitados hay adolescentes, aliens, 
 * Gearhead, Squanchy, Birdpearson y 
 * Abradolph Lincler (una combinación de DNA
 * de Adolf Hitler y Abraham Lincoln).
 * 
 * Cuando un invitado/a llega a la fiesta, 
 * se le da de alta en el receptivo del sistema
 * mediante su tarjeta de crédito.
 * 
 * El receptivo carga en el crédito de la tarjeta:
 * - El coste del UberOvni de vuelta a casa
 * - El coste del pack de bienvenida (Collaxion crystals).
 * 
 * El componente de reserva de Ovnis y el componente
 * de entrega del pack de bienvenida observan al
 * componente receptivo, de modo que cuando el receptivo
 * da de alta a un invitado/a automáticamente cargan 
 * en la tarjeta del invitado/a el coste de ambos servicios. 
 */

//package ricksy.business;

//public class RicksyBusiness {
    
    //public static void main(String[] args) {
        console.log();

        /**
         * Crea una tarjeta de crédito para Abradolph.
         * Como es una AndromedanExpress
         * el crédito inicial es de 3000 EZIS
         */

        //CreditCard abradolph = new CreditCard("Abradolph Lincler", "4916119711304546");
        
        console.log("\n" + "Tarjeta de Abradolph" + "\n" + 
                                  "===================="        );
        console.log(abradolph);

        /**
         * Construye el componente de reserva de Ovnis.
         * Recibe el objeto tarjeta de crédito del invitado/a
         * en el método dispatch(card)
         * y realiza un cargo a la tarjeta.
         * Si hay saldo suficiente se reserva un UberOvni
         * de los que estén libres.
         * El coste del ovni es de 500 EZIs.
         */

        //UfosPark ufosPark = new UfosPark();

        // Da de alta en la flota de ovnis 2 UFOS.

        //String[] ufosID = { "unx", "dox" };
		//for (String ovni : ufosID) {
		//	ufosPark.add(ovni);
        //}
        
        // Procesamos el pago y reserva de ovni de Abradolph
        //ufosPark.dispatch(abradolph);

        // Mostramos el ID del ovni asignado a Abradolph
        console.log("\nOvni de Abradolph\n" + 
                             "=================");
        console.log(ufosPark.getUfoOf(abradolph.number()));
       
        // Mostramos el credito de la tarjeta de Abradolph
        console.log("Credito de Abradolph: " + abradolph.credit());

        // La dualidad en Abradolph quiere reservar otro ovni.
        // El sistema detecta que ya tiene uno 
        // e ignora la petición.

        console.log("\nAbradolph quiere otro ovni\n" + 
                             "==========================");
        //ufosPark.dispatch(abradolph);
        console.log("Su credito no ha cambiado: " + abradolph.credit());
        console.log("Ovni de Abradolph: " + ufosPark.getUfoOf(abradolph.number()));

        // A GearHead le vacía la tarjeta el alien "Cámara Lenta" 
        // mientras le daba la chapa, justo antes de pagar el ovni.
        // Intenta reservarlo y el componente de reserva de ovnis
        // no le asigna ninguno.

        console.log("\nLLega GearHead!\n" + 
                             "===============");
        //CreditCard gearHead = new CreditCard("Gearhead", "8888888888888888");

        //gearHead.pay(3000); // le vacían la cartera

        //ufosPark.dispatch(gearHead);
        console.log("Su credito es cero: " + gearHead.credit());
        console.log("No puede reservar ovni: " + ufosPark.getUfoOf(gearHead.number()));
        
        // Squanchy deja su ovni reservado
        // antes de irse a squanchear

        console.log("\nLLega Squanchy!\n" + 
                             "==============");
        //CreditCard squanchy = new CreditCard("Squanchy", "4444444444444444");
        //ufosPark.dispatch(squanchy);
        console.log("Su credito es: " + squanchy.credit());
        console.log("Su ovni es: " + ufosPark.getUfoOf(squanchy.number()));

        // Morty quiere un ovni para huir de la fiesta
        // pero ya no queda ninguno disponible

        console.log("\nAlgun ovni para Morty?\n" + 
                             "======================");
        //CreditCard morty = new CreditCard("Morty", "0000000000000000");
        //ufosPark.dispatch(morty);
        console.log("Su credito no ha cambiado: " + morty.credit());
        console.log("No hay ovni Morty: " + ufosPark.getUfoOf(morty.number()));

        // Metemos un ovni más en la flota de ovnis
        // y mostramos la flota por consola

        console.log("\nFlota de ovnis\n" + 
                             "==============");
        //ufosPark.add("trex");
        console.log(ufosPark);


        /**
         * Construye el dispensador de packs de bienvenida.
         * Indica el numero de unidades y el coste de cada
         * uno de ellos, que es de 50 EZIs
         */

        //CrystalExpender packExpender = new CrystalExpender(3, 50);

        // Muestra el total de packs y su precio unidad
        console.log("\nPacks\n" + 
                             "=====");
        console.log(packExpender);

        // Abradolph compra su pack de bienvenida
        //packExpender.dispatch(abradolph);

        console.log("\nAbradolph compra su pack\n" + 
                             "========================");
        console.log("Packs\n" + packExpender);
        console.log("Credito de Abradolph: " + abradolph.credit());

        // El pobre GerHead no tiene crédito para comprar su pack
        console.log("\nGearHead sin credito para su pack\n" + 
                             "=================================");
        //packExpender.dispatch(gearHead);
        console.log("Packs\n" + packExpender);
        console.log("Credito de GearHead: " + gearHead.credit());


        /**
         * Vamos a automatizar ahora ambas tareas, de modo que
         * cuando llega un invitado/a se le asiga un ovni
         * y un pack y se realiza el cargo a la tarjeta.
         * 
         * Para ello, crea el componente receptivo
         * y registra (añade) los componentes UfosPark
         * y CrystalDispatcher al receptivo
         */

        //Receptivo receptivo = new Receptivo();
        //receptivo.registra(packExpender);
        //receptivo.registra(ufosPark);

        // Implementa el metodo receptivo.dispatch()
        // para que invoque a UfosPark.dispatch()
        // y a CrystalExpender.dispatch()

        // Squanchy reserva ovni (ya tiene) y pack

        console.log("\nLLega Squanchy!\n" + 
                             "===============");
        //receptivo.dispatch(squanchy);
        //mostrarReserva(squanchy, packExpender, ufosPark);

        // Gearhead reserva ovni y pack.
        // No tiene crédito.

        console.log("\nLLega GearHead!\n" + 
                             "===============");
        //gearHead.pay(3000); // no tiene crédito
        //receptivo.dispatch(gearHead);
        //mostrarReserva(gearHead, packExpender, ufosPark);

        // Birdpearson es recibido en la fiesta

        console.log("\nLLega Birdpearson!\n" + 
                             "==================");
        //CreditCard birdpearson = new CreditCard("Birdpearson", "1111111111111111");
        //receptivo.dispatch(birdpearson);
        //mostrarReserva(birdpearson, packExpender, ufosPark);

        // Morty intenta reserver un ovni y un pack pero no quedan

        console.log("\nMorty quiere pack y ovni pero no quedan :(\n" + 
                             "==========================================");
        //morty = new CreditCard("Morty", "0000000000000000");
        //receptivo.dispatch(morty);
        //mostrarReserva(morty, packExpender, ufosPark);
        

        /**
         * A por el 10!! 
         * Wubba lubba dub dub!!
         * 
         * Añade otra tarea al receptivo,
         * de modo que 5 invitados:
         * abradolph, squanchy, morty, gearHead, birdpearson
         * encarguen un RickMenú junto 
         * al ovni y al pack de bienvenida.
         * Hay 100 RickMenús y su precio es de 10 EZIs.
         * Muestra el total de pedidos y la lista de
         * invitados/as (numero de tarjeta) que han hecho un pedido.
         */

         // tu código aquí

        //RickMenuDispatcher MenuDispatcher = new RickMenuDispatcher();

        //receptivo.registra(MenuDispatcher);

        //CreditCard[] cards = {abradolph, squanchy, morty, gearHead, birdpearson};

        //for (CreditCard card: cards) {
        //    receptivo.dispatch(card);
        //}

        console.log("\nPedidos de RickMenus:\n" + 
                             "=====================");
        console.log(MenuDispatcher);

        console.log("\nCreditos de los invitados/as:\n" + 
                             "=============================");

        //for (CreditCard card: cards) {
            console.log(card);
            console.log();
        //}
    //}

    //private static void mostrarReserva(CreditCard card, CrystalExpender expender, UfosPark ufos) {
        console.log(card);
        console.log("Packs: " + expender.stock());
        console.log("Ovni: " + ufos.getUfoOf(card.number()));
    //}
//}