# VODAN in the Box Deployment Configuration

This is an example deployment for VODAN. It contains preconfigured [Data Stewardship Wizard](https://ds-wizard.org) (DSW) and [FAIR Data Point](https://fairdatapoint.readthedocs.io/) (FDP).

## Instructions

**1. Clone repository**

```
$ git clone https://github.com/codevence/vodan-deployment-example
```

**2. Edit configs**

The DSW and FDP are mostly preconfigured. However, there are still some properties that has to be defined. Go through configuration files and find `(!)` with description what to do.


**3. Generate certificates**

For running HTTPS, you need to generate certificates and mount it to the proxy. We recommend to use [Let's encrypt](https://letsencrypt.org/) together with [certbot](https://certbot.eff.org/). You need 3 certificates - for FDP, for DSW and for DSW API.

**4. Run docker**

```
$ docker-compose up -d
```

**5. Open browser**

- FAIR Data Point
  - Default username:`albert.einstein@example.com`
  - Default password `password`.

- Data Stewardship Wizard
  - Default username:`albert.einstein@example.com`
  - Default password `password`.


## Important notes

For more information, see [FDP Docs](https://fairdatapoint.readthedocs.io/) and [DSW Docs](https://docs.ds-wizard.org)
