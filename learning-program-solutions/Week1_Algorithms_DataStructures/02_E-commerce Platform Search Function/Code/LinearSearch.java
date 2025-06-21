public class LinearSearch {
    public static Product findById(Product[] products, int id) {
        for (Product p : products) {        
            if (p.getProductId() == id) {
                return p;                   
            }
        }
        return null;                        
    }
}
