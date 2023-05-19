SCSS štruktúra pri tak malom layoute a pár komponentoch nemá moc význam, ale bežne používam 7–1 pattern.
- vlastné premenné (spacing, typografiu, farby) som neriešil / myslím že to nebolo cieľom.
- base.scss - tu som vložil čast CSS z Boostrapu kvôli GRIDU, bežne by samozrejme stačilo mať nalinkovaný celý Bootstrap 

- jQuery na modal window je velmi priamočiare a neohrabané - DRY riešim pri väčšich zadaniach ( alebo aspoň viacerych funkionalitách / väčšej interaktivite)

- úvodny layout s benefitmi by som riešil pomocou CSS Gridu, ale pri Boostrap 4 som nakoniec zvolil columny v columne
