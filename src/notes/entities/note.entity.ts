import { Note } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class NoteEntity implements Note {
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty({ required: false, nullable: true })
    description: string | null;

    @ApiProperty()
    body: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}