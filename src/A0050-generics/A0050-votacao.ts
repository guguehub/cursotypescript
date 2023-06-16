/*
qual sua linguagem de programaçcao favorita?
pyton
javascript typescript
####
qual sua cor preferida?
vermelho
verde
azul
*/
type VotationOption = {
  numberOfvotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }
  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfvotes += 1;
  }

  get VotationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.VotationOptions) {
        console.log(votationOption.option, votationOption.numberOfvotes);
      }
      console.log('###');
    }
  }
}

const votation1 = new Votation('qual sua linguagem preferida?');
votation1.addVotationOption({ option: 'pyton', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'Javascript', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'Typescript', numberOfvotes: 0 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(0);

const votation2 = new Votation('qual sua cor preferida?');
votation2.addVotationOption({ option: 'vermelho', numberOfvotes: 0 });
votation2.addVotationOption({ option: 'verde', numberOfvotes: 0 });
votation2.addVotationOption({ option: 'azul', numberOfvotes: 0 });
votation2.vote(1);
votation2.vote(1);
votation2.vote(0);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
