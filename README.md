Minimal Autoindex
=================

Tema per il directory listing di Apache
---------------------------------------

### Informazioni
Un tema minimale per il directory listing dei webserver Apache.
Richiede che sia abilitato il modulo autoindex e la configurazione tramite virtual hosts o htaccess.

### Istruzioni
Assicurasi che nel file httpd.conf sia abilitato il modulo Autoindex.
Se non fosse presente aggiungere alla configurazione:

	LoadModule autoindex_module libexec/apache2/mod_autoindex.so
	Include /private/etc/apache2/extra/httpd-autoindex.conf

Poi sempre in httpd.conf, creare un alias alla cartella Autoindex.
Per esempio:
	
	Alias autoindex private/etc/apache2/Autoindex 

Nel file httpd-vhosts.conf o in un .htaccess nella root aggiungere la configurazione del tema.