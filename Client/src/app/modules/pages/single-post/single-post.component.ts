import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  public text: string = 'Λίγα λόγια για το House of the Dragon: Σε περίπτωση που δε γνωρίζετε, πρόκειται για το πρώτο spinoff σόου του σύμπαντος του George R.R.Martin, μέσα από το οποίο θα μεταφερθούμε 200 χρόνια πριν τα γεγονότα του "A Song of Ice and Fire", εκεί όπου ο Οίκος των Targaryen βρισκόταν στο ζενίθ του. "Θεοί. Βασιλιάδες. Φωτιά. Αίμα" αυτές είναι οι λέξεις με τις οποίες το HBO προλογίζει τη σειρά και θα μας μεταφέρει στα γεγονότα που οδηγούν στο τέλος του άλλοτε ένδοξου αυτού Οίκου και τον εμφύλιο των Targaryen γνωστό ως τον "Χορό των Δράκων". Το cast απαρτίζεται από τους: Paddy Considine(The Outsider, Peaky Blinders) που θα παίξει τον Βασιλιά Viserys Targaryen, Emma D\'Arcy (Truth Seekers, Hannah) ως Πριγκίπισσα Rhaenyra Targaryen, Matt Smith (The Crown, Doctor Who) στον ρόλο του Πρίγκιπα Daemon Targaryen, Olivia Cooke ως "Alicent Hightower", Rhys Ifans ως "Otto Hightower", Steve Toussaint ως "Lord Colrys Velaryon" ή αλλιώς γνωστός ως "Sea Snake". Μαζί τους οι: Sonoya Mizuno (Devs) ως Mysaria, Fabien Frankel (The Serpent) ως Knight Ser Criston Cole και η Eve Best (Nurse Jackie) στο ρόλο της συζύγου του "Sea Snake". Tη δημιουργία του υπογράφουν οι George R.R.Martin και Ryan J.Condal(Colony).Ο Condal, μαζί με τον σκηνοθέτη Miguel Sapochnik, εκτελούν χρέη showrunner και εκτελεστικών παραγωγών.Το House of the Dragon θα αποτελείται από 10 επεισόδια, τουλάχιστον για την πρώτη σεζόν του. Το House of the Dragon θα κάνει πρεμιέρα στις 21 Αυγούστο';

  constructor() {}

  ngOnInit(): void {
    
  }
}
