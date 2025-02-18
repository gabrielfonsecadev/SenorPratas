using AutoMapper;
using Pratas.Models;
using Pratas.Dtos;    // Substitua pelo namespace dos seus DTOs

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        // CreateMap<object, object>()
        //     .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));

        // Mapeamento de Produto
        CreateMap<Produto, ProdutoDto>()
            .ForMember(dest => dest.Categoria, opt => opt.MapFrom(src => src.Categoria))
            .ForMember(dest => dest.Collection, opt => opt.MapFrom(src => src.Collection));


        CreateMap<ProdutoForInsertDto, Produto>();
        CreateMap<ProdutoForUpdateDto, Produto>();
        // Mapeamento de Categoria
        CreateMap<Categoria, CategoriaDto>();

        // Mapeamento de Collection
        CreateMap<Collection, CollectionDto>();

        // Adicione mais mapeamentos conforme necessário
    }
}
