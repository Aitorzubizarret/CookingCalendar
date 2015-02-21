# CookingCalendar

## Instrucciones para la configuración de un virtual host en apache

    cd /etc/apache2/sites-availabe
    sudo cp 001-dam-2015.conf 002-cooking-calendar.conf
    sudo gedit 002-cooking-calendar.conf

Cambiar `ServerName` por `cooking-calendar.local` y el `DocumentRoot` por la ruta correcta en el sistema de ficheros:

    sudo a2ensite 002-cooking-calendar.conf

Permitir el acceso al nuevo virtual host:

    sudo gedit /etc/apache2/apache2.conf

Añadir un nuevo directorio:

    <Directory /home/cursomovil/Workspace/CookingCalendar>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
    </Directory>

Reiniciar Apache 2:

    sudo service apache2 reload

Añadir el nuevo host para que sea accesible desde el navegador:

    sudo gedit /etc/hosts
    
    127.0.0.1     cooking-calendar.local

Enjoy ;)

==============

Ideas :

- https://dribbble.com/shots/1322516--GIF-Recipe-App-Method-Screen
- http://food52.com
- http://www.frattisl.com/inici.php
- http://www.cookbooth.com