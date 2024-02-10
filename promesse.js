class Téléchargement {
    constructor(promesse) {
        this.promesse = promesse;
    }

    startLoading() {
        this.promesse = new Promise((resolve, reject) => {
                const load = ''; 
                if (load==='') {
                    resolve("Téléchargement réussi");
                } else {
                    reject(new Error("Échec du téléchargement"));
                }
        });

        return this.promesse;
    }
    stopLoading() {
            return Promise.reject(new Error("Le téléchargement a été arrêté"));
    }
}
const load1 = new Téléchargement();
load1. startLoading() 
    .then(message => console.log(message))
    load1. stopLoading()
        .catch(error => console.error(`Erreur: ${error.message}`));
