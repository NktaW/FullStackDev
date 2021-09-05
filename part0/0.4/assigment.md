0) Käyttäjä lähettää lomakkeelle syötetyn datan palvelimelle;

	Käyttäjä painaa lomake ("form") painiketta.	

	(Lomakeen lähettäminen aiheuttaa yhteensä viisi HTTP-GET pyyntöä.
	Näistä pyynnöistä ensimmäinen vataa lomakkeen lähestymistapaa, mikä on HTTP-POST pyyntö mikä on tehty palvelimen new_note osoitteeseen.)



1)Selain lähettää lomakkeelle syötetyn datan palvelimelle;
	
	Palvelin vastaa pyyntöön HTTP 302 statuskoodilla.

	(Kyseessä on uudelleenohjauspyyntö, eli redirectaus minkä avulla palvelin kehoittaa selainta tekemään automaattisesti uudet HTTP-GET pyynnön header locationin kertomaan paikkaan, osoitteeseen notes)

	

2)Selain lataa sivun uudelleen;

	Sivun lataus saa aikaan kolme HTTP-GET pyyntöä, ja sivu latautuu uudeleen (main.css, main.js, data.json)

	Lomakkeen mukaan lähetetty data tallentuu palvelimelle.

	(Lomakkeen lähettäminen tapahtuu HTTP POST -pyyntönä ja osoitteeseen new_note,
	määriteltyjen attribuuttien action ja method ansiosta.)



3) Palvelimen koodi huolehtii POST-pyynnöstä;	

	Palvelin luo uutta muistiinpanoa vastaavan olion ja laittaa sen muistiinpanot sisältävään taulukkoon nimeltään notes:

	(POST-pyyntöihin liitettävä data lähetetään pyynnön mukana "runkona" eli bodynä.

 	Palvelin saa POST-pyynnön datan pyytämällä sitä pyyntöä vastaavan olion req kentästä req.body.)

	____________________________________________________________________


https://fullstackopen.com/osa0/web_sovelluksen_toimintaperiaatteita#tehtavia



