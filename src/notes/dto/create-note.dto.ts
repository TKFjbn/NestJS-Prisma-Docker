import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
    

    @ApiProperty({ required: false })
    description?: string;

    
}

/*
@ApiProperty()
    title: string;

@ApiProperty()
    body: string;
*/