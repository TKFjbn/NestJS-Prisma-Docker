import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
    @ApiProperty()
    title: string;

    @ApiProperty({ required: false })
    description?: string;

    @ApiProperty()
    body: string;
}
