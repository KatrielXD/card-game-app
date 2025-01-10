import { Component, OnInit } from '@angular/core';
import { CardGameService } from './services/card-game.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CardGameService],
})
export class AppComponent implements OnInit {
  cards: any[] = [];

  constructor(private cardGameService: CardGameService) {}

  ngOnInit(): void {
    this.cardGameService.getCards().subscribe((data) => {
      this.cards = data;
    });
  }

  shuffleCards(): void {
    this.cardGameService.shuffleCards().subscribe({
      next: (data) => {
        this.cards = data;
      },
      error: (err) => {
        alert('Error al barajar las cartas');
      }
    });
  }

  dealCards(count: number): void {
    this.cardGameService.dealCards(count).subscribe({
      next: (data) => {
        this.cards = data;
      },
      error: (err) => {
        if (err.status === 400) {
          alert(err.error.error); // Mostrar el mensaje de error
        } else {
          alert('Ocurrió un error inesperado.');
        }
      },
    });
  }
  getSuitSymbol(suit: string): string {
    switch (suit.toLowerCase()) {
      case 'corazones':
        return '♥';
      case 'diamantes':
        return '♦';
      case 'tréboles':
        return '✿'; // Alternativa para tréboles
      case 'picas':
        return '✦'; // Alternativa para picas
      default:
        return '';
    }
  }
  
  
  
  
  
  getSuitClass(suit: string): string {
    switch (suit.toLowerCase()) {
      case 'corazones':
      case 'diamantes':
        return 'text-danger'; // Rojo
      case 'tréboles':
      case 'picas':
        return 'text-dark'; // Negro
      default:
        return '';
    }
  }
  
    
  
  
}
