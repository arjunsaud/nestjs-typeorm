import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
  ) {}

  create(createItemDto: CreateItemDto) {
    const item: Item = new Item();
    item.name = createItemDto.name;
    item.public = createItemDto.public;

    return this.itemRepository.save(item);
  }

  findAll() {
    return this.itemRepository.find();
  }

  findOne(id: number) {
    return this.itemRepository.findOneBy({ id: id });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const item: Item = await this.itemRepository.findOneBy({ id: id });
    item.name = updateItemDto.name;
    item.public = updateItemDto.public;

    return this.itemRepository.save(item);
  }

  remove(id: number) {
    return this.itemRepository.delete(id);
  }
}
