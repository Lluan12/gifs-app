import { Component, computed, inject, signal } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
	selector: 'app-trending-page',
	imports: [ListComponent],
	templateUrl: './trending-page.component.html',
})
export class TrendingPageComponent {
	gifService = inject(GifService);
	render = computed(() => this.gifService.trendingGifsLoading());
	data = computed(() => this.gifService.trendingGifs());
}
