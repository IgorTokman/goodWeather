# goodWeather

A simple weather app called Good Weather using jQuery Mobile.

Application performs the getting information from weather API (Forecast.io) using AJAX.

## Instructions

1. Clone this repository into your local machine using the terminal (mac) or Gitbash (PC)
`$ git clone https://github.com/IgorTokman/goodWeather.git`
2. CD to the folder `cd goodWeather`

You must create a new virtual host for this project and restart your web-server.

Example of virtual host settings
-----

```sh
<VirtualHost *:80>
        ServerAdmin admin@site1.loc
        DocumentRoot /home/igortokman/PhpstormProjects/goodWeather/
        ServerName goodWeather.local
</VirtualHost>
```